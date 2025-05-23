import { type ReactElement } from "react";
import { TableCell, TableRow, Typography, Box, Divider } from "@mui/material";

import type { SummonerData } from "../types/summonerdata.type";

import './Player.css';

export function Player({ data }: { data: SummonerData | null }): ReactElement | undefined {
    if (!data) return;

    return (<>
        <TableRow sx={{ height: '20vh' }} className="player">
            <TableCell>
                <Box sx={{ alignItems: 'center', display: 'flex' }}>
                    <div className="avatar">
                        {data.tier && <img src={`/borders/${data.tier}.png`} alt={`${data.tier} rank border`} className="background-img" />}
                        <div className="img-wrapper">
                            <img onError={(e) => { e.currentTarget.src = 'https://placehold.co/128x128' }}
                                src={`/avatars/${data.name}`}
                            />
                        </div>
                    </div>
                </Box>
            </TableCell>
            <TableCell>
                <Box sx={{ flex: 1 }}>
                    <>Wins: {data.wins}</>
                    <>Losses: {data.losses}</>
                    <>Win rate: {`${(data.wins / (data.wins + data.losses) * 100).toFixed(2)}%`}</>
                </Box>
            </TableCell>
            <TableCell>
                <Typography variant='h2'>
                    {data && data.totalLP}
                </Typography>
            </TableCell>
            <TableCell>
                <Typography variant='h2'>
                    {data && data.totalLP}
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
        </tr>
    </>
    );
}