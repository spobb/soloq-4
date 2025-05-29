import type { ReactElement } from "react";
import { Typography, IconButton, Box, Toolbar, SvgIcon, Divider } from "@mui/material";

import riotIcon from 'assets/riot.svg?react';
import lolIcon from 'assets/lol.svg?react'
import GitHubIcon from '@mui/icons-material/GitHub';

import { HoverPopover } from 'components/HoverPopover';
import './Footer.css';

export function Footer(): ReactElement {
    return (
        <footer>
            <Divider />
            <Box sx={{ padding: '2rem 16vw' }} className="footer">
                <Toolbar>
                    <Typography variant="h5" component='a' href="https://github.com/spobb" marginRight='auto'>
                    </Typography>
                    <HoverPopover text="Riot API">
                        <IconButton href="https://developer.riotgames.com" color="primary" size="large">
                            <SvgIcon component={riotIcon} inheritViewBox />
                        </IconButton>
                    </HoverPopover>
                    <HoverPopover text="League of Legends">
                        <IconButton href="https://developer.riotgames.com" color="primary" size="large">
                            <SvgIcon component={lolIcon} inheritViewBox />
                        </IconButton>
                    </HoverPopover>
                    <HoverPopover text="Github">
                        <IconButton href="https://github.com/spobb/soloq-4" color="primary" size="large">
                            <GitHubIcon />
                        </IconButton>
                    </HoverPopover>
                </Toolbar>
            </Box>
        </footer >
    )
}