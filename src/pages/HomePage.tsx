import { ReactElement } from "react";

import { useSummoner } from "contexts/SummonerContext";
import { Player } from "components/Player";
import { ColumnHeader } from "components/ColumnHeader";

import { Typography, Box, CircularProgress, Grid } from "@mui/material";


export function HomePage(): ReactElement {
    const { summoners, loading, error, setSortBy } = useSummoner();

    function handleClick(label: string) {
        setSortBy(label);
    }

    if (loading) return (<Box className="loading">
        <CircularProgress color="secondary" />
        <Typography variant="body1">Loading...</Typography>
    </Box>
    );
    if (error) return <p>{error}</p>;

    return (
        <Box
            width='80vw'
            maxWidth='1280px'
        >
            <Grid container columns={7} textAlign='center' flex={1}>
                <Grid size={4} />
                <Grid flex={1} marginRight='4px'>
                    <ColumnHeader title="W / L" onClick={handleClick} label='winRate' />
                </Grid>
                <Grid flex={1} marginRight='4px'>
                    <ColumnHeader title="LP" onClick={handleClick} label='totalLP' />
                </Grid>
                <Grid flex={1} marginRight='4px'>
                    <ColumnHeader title="LP ajustés" onClick={handleClick} label='adjustedLP' />
                </Grid>
            </Grid >
            <Box width='100%' marginTop='2rem' display='flex' flexDirection='column' gap='2rem'>
                {summoners.map((data, i) => (
                    <Player data={data} key={i} position={i} />
                ))}
            </Box>
        </Box >
    )
}