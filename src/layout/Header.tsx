import type { ReactElement } from "react";
import { Typography, Button, AppBar, Toolbar } from "@mui/material";
import GavelIcon from '@mui/icons-material/Gavel';

import './Header.css';

export function Header(): ReactElement {
    return (
        <AppBar sx={{ background: 'transparent', boxShadow: 'none', marginBottom: '4rem', padding: 4 }} position="sticky">
            <Toolbar>
                <Typography variant="h2" component='a' href="/" marginRight='auto' className="home-button">
                    SoloQ IV
                </Typography>
                <Button variant="text" color="secondary" size="large" endIcon={<GavelIcon />}>
                    Règles
                </Button>
            </Toolbar>
        </AppBar>
    )
}