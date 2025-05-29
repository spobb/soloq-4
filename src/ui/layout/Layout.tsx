import type { ReactElement } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";

import { CircularProgress, Typography, Box } from "@mui/material";

import './Layout.css';
import { useSummoner } from "src/features/SummonerContext";

export function Layout(): ReactElement {
    const { loading } = useSummoner();

    if (loading) return (
        <Box className="loading">
            <CircularProgress color="secondary" />
            <Typography variant="body1" fontSize='2rem'>Chargement...</Typography>
        </Box>
    );

    return (
        <>
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>)
}