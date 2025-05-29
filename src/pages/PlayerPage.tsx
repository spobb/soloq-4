import { useEffect, useState, type ReactElement } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Box, Typography } from '@mui/material';
import type { Summoner } from "types/summoner.type";
import { fetchService } from "services/fetch.service";
import { PLAYER_LIST } from "data/player.data";
import { HoverPopover } from "components/HoverPopover";

import './PlayerPage.css';

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

    return (<Box sx={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: '65vh',
        width: '100%',
        maxWidth: '1920px'
    }}>
        <Box className="banner">
            <div className="avatar-big">
                {data.tier && <img
                    src={`/borders/${data.tier}.png`}
                    alt={`${data.tier} rank border`}
                    className={`background-img-big ${(data.tier.toLowerCase())}`}
                />}
                <div className="img-wrapper-big">
                    <img onError={(e) => { e.currentTarget.src = 'https://placehold.co/128x128' }}
                        src={`/avatars/${data.name}`}
                    />
                </div>
            </div>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'baseline'
            }}>
                <HoverPopover text={`${data.name}#${data.tagLine}`}>
                    <Typography variant="h4" color='text.secondary' textAlign='center'>
                        {data.name}
                    </Typography>
                </HoverPopover>
            </Box>
        </Box>
    </Box>)
}