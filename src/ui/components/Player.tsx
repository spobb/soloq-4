import { type ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Box, Divider, Grid } from "@mui/material";

import type { Summoner } from "types/summoner.type";
import { HoverPopover } from "./HoverPopover";
import { Winrate } from "./Winrate";

import './Player.css';

export function Player({ data }: { data: Summoner | null }): ReactElement | undefined {
    const navigate = useNavigate();

    if (!data) return;

    function handleClick() {
        navigate(`/joueur/${data?.name}`, { state: data });
    }

    return (<>
        <Box sx={{ flexDirection: 'row', display: 'flex' }} className="player" onClick={handleClick}>
            <Grid container columns={8} width='100%'>
                <Grid size={4}>
                    <Box sx={{ alignItems: 'center', display: 'flex' }}>
                        <div className="avatar">
                            {data.tier && <img
                                src={`/borders/${data.tier}.png`}
                                alt={`${data.tier} rank border`}
                                className="background-img"
                            />}
                            <div className="img-wrapper">
                                <HoverPopover text={data.name}>
                                    <img onError={(e) => { e.currentTarget.src = 'https://placehold.co/128x128' }}
                                        src={`/avatars/${data.name}`}
                                    />
                                </HoverPopover>
                            </div>
                        </div>
                        <Divider orientation="vertical" variant="middle" sx={{ marginX: '4rem' }} />
                        <Typography variant='body1' component='span'>{data.rank}</Typography>
                    </Box>
                </Grid>
                <Grid className="cell" flex={1}>
                    <Winrate wins={data.wins} losses={data.losses} />
                </Grid>
                <Grid className="cell" flex={1}>
                    <Typography variant="body1" fontSize='1.5rem'>
                        {data.wins} / {data.losses}
                    </Typography>
                </Grid>
                <Grid className="cell" flex={1}>
                    <Typography variant='h2' fontSize='2.5rem'>
                        {data && data.totalLP}
                    </Typography>
                </Grid>
                <Grid className="cell" flex={1}>
                    <Typography variant='h2' fontSize='2.5rem'>
                        {data && Math.round(data.totalLP! * data.coefficient)}
                    </Typography>
                </Grid>
            </Grid>
        </Box >
    </>
    );
}