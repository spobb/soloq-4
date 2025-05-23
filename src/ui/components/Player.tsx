import { type ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { TableCell, TableRow, Typography, Box, Divider } from "@mui/material";

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
        <TableRow sx={{ height: '20vh' }} className="player" onClick={handleClick}>
            <TableCell>
                <Box sx={{ alignItems: 'center', display: 'flex' }}>
                    <div className="avatar">
                        {data.tier && <img src={`/borders/${data.tier}.png`} alt={`${data.tier} rank border`} className="background-img" />}
                        <div className="img-wrapper">
                            <HoverPopover text={data.name}>
                                <img onError={(e) => { e.currentTarget.src = 'https://placehold.co/128x128' }}
                                    src={`/avatars/${data.name}`}
                                />
                            </HoverPopover>
                        </div>
                    </div>
                </Box>
            </TableCell>
            <TableCell>
                <Box sx={{ flex: 1, placeItems: 'center', display: 'flex' }}>
                    <Winrate wins={data.wins} losses={data.losses} />
                </Box>
            </TableCell>
            <TableCell>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', flex: 1, flexDirection: 'column' }}>
                    <Typography variant="body1" fontSize='1.5rem'>
                        {data.wins} / {data.losses}
                    </Typography>
                </Box>
            </TableCell>
            <TableCell>
                <Typography variant='h2'>
                    {data && data.totalLP}
                </Typography>
            </TableCell>
            <TableCell>
                <Typography variant='h2'>
                    {data && Math.round(data.totalLP! * data.coefficient)}
                </Typography>
            </TableCell>
        </TableRow >
        <tr>
            <td>
            </td>
            <td>
                <Divider variant="middle" sx={{ marginX: '40%' }} />
            </td>
            <td>
                {/* <Divider variant="middle" sx={{ marginX: '40%' }} /> */}
            </td>
            <td>
                {/* <Divider variant="middle" sx={{ marginX: '40%' }} /> */}
            </td>
            <td>
                {/* <Divider variant="middle" sx={{ marginX: '40%' }} /> */}
            </td>
        </tr>
    </>
    );
}