import { useEffect, useState, type ReactElement } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Box, Typography } from '@mui/material';
import type { Summoner } from "types/summoner.type";
import { fetchService } from "services/fetch.service";
import { PLAYER_LIST } from "data/player.data";
import { HoverPopover } from "components/HoverPopover";

export function PlayerPage(): ReactElement | undefined {
    const [data, setData] = useState<Summoner | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const location = useLocation();

    const { name } = useParams();

    useEffect(() => {
        if (!location.state) {
            const player = PLAYER_LIST.find(p => p.name == name);
            if (!player) return;
            fetchService(`/lol/league/v4/entries/by-puuid/${player.puuid}`)
                .then(data => { setData(data.find((d: Summoner) => d.queueType === "RANKED_SOLO_5x5")) })
                .catch(err => setError(err))
                .finally(() => setLoading(false));
            return;
        }
        setLoading(false);
        setData(location.state);
    }, [location.state, name]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data) return <div>No data available</div>;

    return (<>
        <div className="avatar">
            {data.tier && <img
                src={`/borders/${data.tier}.png`}
                alt={`${data.tier} rank border`}
                className={`background-img ${(data.tier.toLowerCase())}`}
            />}
            <div className="img-wrapper">
                <HoverPopover text={data.name}>
                    <img onError={(e) => { e.currentTarget.src = 'https://placehold.co/128x128' }}
                        src={`/avatars/${data.name}`}
                    />
                </HoverPopover>
            </div>
        </div>
        <Box sx={{ flex: 1 }}>
            <>Wins: {data.wins}</>
            <>Losses: {data.losses}</>
            <>Win rate: {`${(data.wins / (data.wins + data.losses) * 100).toFixed(2)}%`}</>
        </Box>
        <Typography variant='h2'>
            {data && data.totalLP}
        </Typography>
        <Typography variant='h2'>
            {data && data.totalLP}
        </Typography>
    </>)
}