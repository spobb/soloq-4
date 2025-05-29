import { createContext, ReactElement, ReactNode, useContext, useEffect, useState, Dispatch, SetStateAction } from 'react';
import { Summoner } from 'types/summoner.type';

import { getSummoners } from 'services/getsummoners.service';
import { sort } from 'services/sort.service';
import { SortDirection } from '@mui/material';

type SummonerContextType = {
    summoners: (Summoner | null)[];
    loading: boolean;
    error: string | null;
    sortBy: string;
    setSortBy: Dispatch<SetStateAction<string>>;
    sortDirection: string | boolean;
    setSortDirection: Dispatch<SetStateAction<SortDirection>>;
}

const SummonerContext = createContext<SummonerContextType>({
    summoners: [],
    loading: true,
    error: null,
    sortBy: 'adjustedLP',
    setSortBy: () => { },
    sortDirection: 'asc',
    setSortDirection: () => { }
});

// eslint-disable-next-line
export const useSummoner = (): SummonerContextType => useContext(SummonerContext);

export function SummonerProvider({ children }: { children: ReactNode }): ReactElement {
    const [summoners, setSummoners] = useState<(Summoner)[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [sortBy, setSortBy] = useState<string>('adjustedLP');
    const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

    useEffect(() => {
        getSummoners()
            .then(result => {
                if (!result) return;

                const sortedResult = sort(result, sortBy, sortDirection);

                setSummoners(sortedResult);
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, [sortBy, sortDirection]);

    return (
        <SummonerContext.Provider value={{ summoners, loading, error, sortBy, setSortBy, sortDirection, setSortDirection }}>
            {children}
        </SummonerContext.Provider>
    )
}