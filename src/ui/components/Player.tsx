import { type ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Box, Grid, Chip } from "@mui/material";

import type { Summoner } from "types/summoner.type";
import { HoverPopover } from "./HoverPopover";
import { Winrate } from "./Winrate";

import './Player.css';
import { DivisionFR } from "enums/division.enum";

const RANKINGS = ['gold', 'silver', 'bronze'];

export function Player({ data, position }: { data: Summoner | null, position: number }): ReactElement | undefined {
    const navigate = useNavigate();

    if (!data) return;

    // current League rank as a CSS var -> color attribute
    const leagueRankColorVar = `var(--rank-${data?.tier.toLowerCase()})`;
    // current challenge ranking as a string to complete CSS classes
    const challengeRankColor = RANKINGS[position] || '';
    // current challenge ranking as a CSS var -> color attribute
    const challengeRankColorVar = RANKINGS[position] ? `var(--${RANKINGS[position]}-light)` : '';
    const leagueRankFR = DivisionFR[data?.tier as keyof typeof DivisionFR];

    function handleClick() {
        navigate(`/joueur/${data?.name}`, { state: data });
    }

    return (<>
        <Box
            sx={{ flexDirection: 'row', display: 'flex' }}
            className={`player ${challengeRankColor}-border`}
            onClick={handleClick}
        >
            <Grid container columns={7} width='100%'>
                {/* AVATAR GRID CELL */}
                <Grid size={1}>
                    <div className="avatar">
                        {(data.tier && data.tier !== 'UNRANKED') && <img
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
                </Grid>
                {/* MAIN PLAYER CARD CONTENT GRID CELL */}
                <Grid className="player-main" size={3}>
                    <Box flexDirection='column'>
                        <Typography
                            variant='body1'
                            component='h4'
                            className="player-name"
                            color={challengeRankColorVar}
                        >{data.name}</Typography>
                        <Chip
                            variant="outlined"
                            label={`${leagueRankFR} ${data.rank}`}
                            sx={{ color: leagueRankColorVar }}
                        />
                    </Box>
                </Grid>
                {/* WINRATE GRID CELL */}
                <Grid className="cell" flex={1} flexDirection='column'>
                    <Winrate wins={data.wins} losses={data.losses} />
                    <Typography variant="body1" fontSize='1rem'>
                        {data.wins} / {data.losses}
                    </Typography>
                </Grid>
                {/* LP GRID CELL */}
                <Grid className="lp cell border-divider" flex={1}>
                    <Typography variant='h2' fontSize='2.5rem'>
                        {data && data.totalLP}
                    </Typography>
                </Grid>
                {/* ADJUSTED LP GRID CELL */}
                <Grid className="lp cell border-divider" flex={1}>
                    <HoverPopover text={`Coefficient: ${data.coefficient.toString()}`}>
                        <Typography variant='h2' fontSize='2.5rem'>
                            {data && Math.round(data.totalLP! * data.coefficient)}
                        </Typography>
                    </HoverPopover>
                </Grid>
            </Grid>
        </Box >
    </>
    );
}