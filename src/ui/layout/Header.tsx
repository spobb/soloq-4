import type { ReactElement } from "react";
import { Typography, Button, AppBar, Toolbar, Divider } from "@mui/material";
import GavelIcon from '@mui/icons-material/Gavel';
import NotesIcon from '@mui/icons-material/Notes';

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
                <Button href="#" variant="outlined" color="secondary" size="large" endIcon={<NotesIcon />} className="lol-button">
                    Documentation
                </Button>
                <Divider sx={{ marginX: 2 }} />
                <Button href="/regles" variant="outlined" color="secondary" size="large" endIcon={<GavelIcon />} className="lol-button">
                    Règles
                </Button>
            </Toolbar>
        </AppBar >
        <Divider flexItem />
    </div >
    )
}