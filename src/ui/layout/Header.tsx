import type { ReactElement } from "react";
import { Typography, Button, AppBar, Toolbar, Divider, Box, Stack, ButtonBase } from "@mui/material";
import GavelIcon from '@mui/icons-material/Gavel';
import NotesIcon from '@mui/icons-material/Notes';
import { Countdown } from "components/Countdown";

import './Header.css';
import { useNavigate } from "react-router-dom";

export function Header(): ReactElement {
    const navigate = useNavigate();

    return (
        <div className="header">
            <AppBar
                sx={{
                    boxShadow: 'none',
                    // paddingBottom: '4rem',
                    padding: 2,
                    backdropFilter:
                        'blur(2px)',
                    background: 'inherit'
                }}
                position="sticky"
            >
                <Toolbar>
                    <Box width='25%'>
                        <ButtonBase onClick={() => navigate('/')}>
                            <Typography variant="h2" marginRight='auto' className="home-button">
                                SoloQ IV
                            </Typography>
                        </ButtonBase>
                    </Box>
                    <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center', marginTop: 'auto' }}>
                        <Countdown />
                    </Box>
                    <Stack direction='row' width='25%' justifyContent='flex-end'>
                        <Button onClick={() => navigate('/documentation')} variant="outlined" color="secondary" size="large" endIcon={<NotesIcon />} className="lol-button">
                            Documentation
                        </Button>
                        <Divider sx={{ marginX: 2 }} />
                        <Button onClick={() => navigate('/regles')} variant="outlined" color="secondary" size="large" endIcon={<GavelIcon />} className="lol-button">
                            Règles
                        </Button>
                    </Stack>
                </Toolbar>
            </AppBar >
            <Divider flexItem />
        </div >
    )
}