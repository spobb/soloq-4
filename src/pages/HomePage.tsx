import { type ReactElement } from "react";

import { Player } from "components/Player";

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Divider, Box, CircularProgress } from "@mui/material";

import { useSummoner } from "contexts/SummonerContext";

export function HomePage(): ReactElement {
    const { summoners, loading, error } = useSummoner();

    if (loading) return (<Box className="loading">
        <CircularProgress color="secondary" />
        <Typography variant="body1">Loading...</Typography>
    </Box>
    );
    if (error) return <p>{error}</p>;

    return (
        <TableContainer sx={{ width: '60vw' }}>
            <Table>
                <TableHead sx={{ position: "sticky" }}>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell sx={{ width: '20%' }}>
                            <Typography color="text.disabled" padding='2rem 0'>
                                Win rate
                            </Typography>
                            <Divider variant="middle" />
                        </TableCell>
                        <TableCell sx={{ width: '20%' }}>
                            <Typography color="text.disabled" padding='2rem 0'>
                                W / L
                            </Typography>
                            <Divider variant="middle" />
                        </TableCell>
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
                    {summoners.map((data) => (<>
                        <Player data={data} key={data?.name} />
                    </>))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}