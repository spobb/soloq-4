import { type ReactElement } from "react";

import { Player } from "components/Player";

import { Typography, Divider, Box, CircularProgress, Grid } from "@mui/material";

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
        <Box
            width='80vw'
            maxWidth='1280px'
        >
            <Grid container columns={8} textAlign='center' flex={1}>
                <Grid size={4} />
                <Grid flex={1}>
                    <Typography color="text.disabled" padding='2rem 0 1rem'>
                        Win rate
                    </Typography>
                    <Divider variant="middle" />
                </Grid>
                <Grid flex={1}>
                    <Typography color="text.disabled" padding='2rem 0 1rem'>
                        W / L
                    </Typography>
                    <Divider variant="middle" />
                </Grid>
                <Grid flex={1}>
                    <Typography color="text.disabled" padding='2rem 0 1rem'>
                        LP
                    </Typography>
                    <Divider variant="middle" />
                </Grid>
                <Grid flex={1}>
                    <Typography color="text.disabled" padding='2rem 0 1rem'>
                        LP ajustés
                    </Typography>
                    <Divider variant="middle" />
                </Grid>
            </Grid >
            <Box width='100%' marginTop='2rem' display='flex' flexDirection='column' gap='2rem'>
                {summoners.map((data) => (<>
                    <Player data={data} key={data?.puuid} />
                </>))}
            </Box>
        </Box>
    )
}