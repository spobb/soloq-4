import { createContext, ReactElement, ReactNode, useContext, useEffect, useState } from 'react';
import { Summoner } from 'types/summoner.type';

import { getSummoners } from 'services/getsummoners.service';

type SummonerContextType = {
    summoners: (Summoner | null)[];
    loading: boolean;
    error: string | null;
}

const SummonerContext = createContext<SummonerContextType>({ summoners: [], loading: true, error: null });

// eslint-disable-next-line
export const useSummoner = (): SummonerContextType => useContext(SummonerContext);

export function SummonerProvider({ children }: { children: ReactNode }): ReactElement {
    const [summoners, setSummoners] = useState<(Summoner | null)[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getSummoners()
            .then(result => {
                if (!result) return;
                setSummoners(result)
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return (
        <SummonerContext.Provider value={{ summoners, loading, error }}>
            {children}
        </SummonerContext.Provider>
    )
}