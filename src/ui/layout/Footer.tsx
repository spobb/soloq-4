import type { ReactElement } from "react";
import { Typography, IconButton, Box, Toolbar, SvgIcon, Divider, Stack } from "@mui/material";

import RiotIcon from 'assets/riot.svg?react';
import LolIcon from 'assets/lol.svg?react'
import GithubIcon from 'assets/github.svg?react'
// import GitHubIcon from '@mui/icons-material/GitHub';

import { HoverPopover } from 'components/HoverPopover';
import './Footer.css';

export function Footer(): ReactElement {
    return (
        <footer>
            <Divider />
            <Box sx={{ padding: '2rem 16vw' }} className="footer">
                <Toolbar>
                    <Stack marginRight='auto' spacing={1}>
                        <Typography variant="body1" fontSize='1.2rem'>
                            <a href="https://github.com/spobb" className="footer-link">spobb</a> <Typography component='span' color="text.disabled" marginX='1rem' fontSize='inherit'>|</Typography>
                            <Typography variant="body1" component='span' fontSize='1rem'>
                                built with <a href="https://react.dev" className="footer-link">&lt;React /&gt;</a> and <a href="https://mui.com/material-ui/" className="footer-link">Material UI</a>
                            </Typography>
                        </Typography>
                        {/* <Typography variant="body1" component='span' color="text.disabled">
                            This product isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties.
                        </Typography> */}
                        <Typography variant="body2" component='span' color="text.disabled">
                            Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.
                        </Typography>
                    </Stack>
                    <Stack direction='row'>
                        <HoverPopover text="Riot Developer Portal">
                            <IconButton href="https://developer.riotgames.com" color="primary" size="large">
                                <SvgIcon component={RiotIcon} inheritViewBox />
                            </IconButton>
                        </HoverPopover>
                        <HoverPopover text="League of Legends">
                            <IconButton href="https://www.leagueoflegends.com/fr-fr/" color="primary" size="large">
                                <SvgIcon component={LolIcon} inheritViewBox />
                            </IconButton>
                        </HoverPopover>
                        <HoverPopover text="Github">
                            <IconButton href="https://github.com/spobb/soloq-4" color="primary" size="large">
                                <SvgIcon component={GithubIcon} inheritViewBox />
                            </IconButton>
                        </HoverPopover>
                    </Stack>
                </Toolbar>
            </Box>
        </footer >
    )
}