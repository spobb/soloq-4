import type { ReactElement } from "react";
import { Typography, Button, AppBar, Toolbar, Divider } from "@mui/material";
import GavelIcon from '@mui/icons-material/Gavel';

import './Header.css';

export function Header(): ReactElement {
    return (<div className="header">
        <AppBar
            sx={{ boxShadow: 'none', paddingBottom: '4rem', padding: 4, backdropFilter: 'blur(2px)', background: 'inherit' }}
            position="sticky"
        >
            <Toolbar>
                <Typography variant="h2" component='a' href="/" marginRight='auto' className="home-button">
                    SoloQ IV
                </Typography>
                <Button href="/regles" variant="text" color="secondary" size="large" endIcon={<GavelIcon />}>
                    Règles
                </Button>
            </Toolbar>
        </AppBar >
        <Divider flexItem />
    </div >
    )
}