import type { ReactElement } from "react";

import { Accordion, AccordionDetails, AccordionSummary, Typography, Box } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

export function RulesPage(): ReactElement {
    return (
        <Box sx={{ display: 'flex', placeItems: 'center', flex: 1 }}>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography component='span' variant='h5'>Lorem ipsum dolor sit amet.</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component='p' variant='body1'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit deserunt temporibus deleniti voluptates iusto magni facilis error nulla voluptatibus dicta.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>)
}