import { useEffect, useState, type ReactElement } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Box, Typography, IconButton, SvgIcon } from '@mui/material';
import { Summoner } from "types/summoner.type";
import { fetchService } from "services/fetch.service";
import { PLAYER_LIST } from "data/player.data";
import { HoverPopover } from "components/HoverPopover";
import { PlayerName } from "components/PlayerName";

import opggIcon from 'assets/opgg.svg?react';
import deeplolIcon from 'assets/deeplol.png';

import './PlayerPage.css';
import { ErrorPage } from "./ErrorPage";

export function PlayerPage(): ReactElement | undefined {
    const [data, setData] = useState<Summoner | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const location = useLocation();

    const { name } = useParams();

    useEffect(() => {
        if (!location.state) {
            const player = PLAYER_LIST.find(p => p.gameName == name);
            if (!player) {
                setError('Player not found');
                setLoading(false);
                return;
            };
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
    if (error) return <ErrorPage />;
    if (!data) return <div>No data available</div>;

    return (<Box sx={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: '65vh',
        width: '100%',
        maxWidth: '1920px'
    }}>
        <Box className="banner" sx={{
            backgroundImage: `url('/banners/${data.tier}.png')`
        }}>
            <div className="avatar-big no-select">
                {data.tier && data.tier !== 'UNRANKED' && <img
                    src={`/borders/${data.tier}.png`}
                    alt={`${data.tier} rank border`}
                    className={`background-img-big ${(data.tier.toLowerCase())}`}
                />}
                <div className="img-wrapper-big">
                    <img onError={(e) => { e.currentTarget.src = 'https://placehold.co/128x128' }}
                        src={`/avatars/${data.gameName}`}
                    />
                </div>
            </div>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'baseline'
            }}>
                <PlayerName gameName={data?.gameName} tagLine={data.tagLine!}>
                    <Typography variant="h4" color='text.secondary' textAlign='center'>
                        {data.gameName}
                    </Typography>
                </PlayerName>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'baseline'
            }}>
                <HoverPopover text='op.gg'>
                    <IconButton href={`https://op.gg/lol/summoners/euw/${data.gameName}-${data.tagLine}`} size="medium">
                        <SvgIcon component={opggIcon} inheritViewBox />
                    </IconButton>
                </HoverPopover>
                <HoverPopover text='deeplol.gg'>
                    <IconButton href={`https://deeplol.gg/summoner/euw/${data.gameName}-${data.tagLine}`} size="medium">
                        <img src={deeplolIcon} width='22' height='22' />
                    </IconButton>
                </HoverPopover>
            </Box>
        </Box>
    </Box>)
}