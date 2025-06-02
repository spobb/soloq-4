import { ReactElement } from "react";

import { useSummoner } from "src/features/SummonerContext";
import { Player } from "components/Player";
import { ColumnHeader } from "components/ColumnHeader";

import { Typography, Box, CircularProgress, Grid } from "@mui/material";
import { ErrorPage } from "./ErrorPage";

export function HomePage(): ReactElement {
    const { summoners, loading, error } = useSummoner();

    if (loading) return (<Box className="loading">
        <CircularProgress color="secondary" />
        <Typography variant="body1">Loading...</Typography>
    </Box>
    );
    if (error) return <ErrorPage {...error} />;

    return (
        <Box
            width='60vw'
            maxWidth='1280px'
        >
            <Grid container columns={7} textAlign='center' flex={1}>
                <Grid size={4} />
                <Grid flex={1} marginRight='4px'>
                    <ColumnHeader label='winRate'>
                        <Typography color="text.disabled" flex={1} sx={{ textWrap: 'nowrap' }}>W / L</Typography>
                    </ColumnHeader>
                </Grid>
                <Grid flex={1} marginRight='4px'>
                    <ColumnHeader label='totalLP'>
                        <Typography color="text.disabled" flex={1} sx={{ textWrap: 'nowrap' }}>LP</Typography>
                    </ColumnHeader>
                </Grid>
                <Grid flex={1} marginRight='4px'>
                    <ColumnHeader label='adjustedLP'>
                        <Typography color="text.disabled" flex={1} sx={{ textWrap: 'nowrap' }}>LP ajustés</Typography>
                    </ColumnHeader>
                </Grid>
            </Grid >
            <Box width='100%' marginTop='2rem' display='flex' flexDirection='column' gap='2rem'>
                {summoners.map((data, i) => (
                    <Player data={data} key={i} />
                ))}
            </Box>
        </Box >
    )
}