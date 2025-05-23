import { type ReactElement, useEffect, useState } from "react";

import { Player } from "../components/Player";

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Divider, Box, CircularProgress } from "@mui/material";

import { getPlayers } from "../services/getplayers.service";
import type { SummonerData } from "../types/summonerdata.type";

export function HomePage(): ReactElement {
    const [players, setPlayers] = useState<(SummonerData | null)[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>();

    useEffect(() => {
        getPlayers()
            .then(result => {
                if (!result) return;
                setPlayers(result)
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return (<Box className="loading">
        <CircularProgress color="secondary" />
        <Typography variant="body1">Loading...</Typography>
    </Box>
    );
    if (error) return <p>{error}</p>;

    return (
        <TableContainer sx={{ width: '60vw' }}>
            <Table stickyHeader>
                <TableHead sx={{ position: "sticky" }}>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell sx={{ width: '20%' }}>
                            <Typography color="text.disabled" padding='2rem 0'>
                                LP
                            </Typography>
                            <Divider variant="middle" />
                        </TableCell>
                        <TableCell sx={{ width: '20%' }}>
                            <Typography color="text.disabled" padding='2rem 0'>
                                LP ajustés
                            </Typography>
                            <Divider variant="middle" />
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {players.map((data) => (<>
                        <Player data={data} key={data?.name} />
                    </>))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}