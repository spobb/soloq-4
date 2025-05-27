import { createContext, ReactElement, ReactNode, useContext, useEffect, useState, Dispatch, SetStateAction } from 'react';
import { Summoner } from 'types/summoner.type';

import { getSummoners } from 'services/getsummoners.service';

type SummonerContextType = {
    summoners: (Summoner | null)[];
    loading: boolean;
    error: string | null;
    setSortBy: Dispatch<SetStateAction<string>>;
}

const SummonerContext = createContext<SummonerContextType>({ summoners: [], loading: true, error: null, setSortBy: () => { } });

// eslint-disable-next-line
export const useSummoner = (): SummonerContextType => useContext(SummonerContext);

export function SummonerProvider({ children }: { children: ReactNode }): ReactElement {
    const [summoners, setSummoners] = useState<(Summoner | null)[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [sortBy, setSortBy] = useState<string>('totalLP');

    useEffect(() => {
        getSummoners()
            .then(result => {
                if (!result) return;

                const key = sortBy as keyof Summoner ?? 'totalLP';
                // sort ?
                result.sort((a, b) => {
                    if (!a && !b) return 0;
                    if (!a) return 1;
                    if (!b) return -1;
                    if (a[key]! > b[key]!) {
                        return -1;
                    }
                    if (a[key]! < b[key]!) {
                        return 1;
                    }
                    return 0;
                });

                setSummoners(result)
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, [sortBy]);

    return (
        <SummonerContext.Provider value={{ summoners, loading, error, setSortBy }}>
            {children}
        </SummonerContext.Provider>
    )
}