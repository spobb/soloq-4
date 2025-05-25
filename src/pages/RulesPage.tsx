import type { ReactElement } from "react";

import { Accordion, AccordionDetails, AccordionSummary, Typography, Box, Divider } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

import { RULES } from "data/rules.data";

export function RulesPage(): ReactElement {
    return (<>
        <Box sx={{ display: 'flex', placeItems: 'center', flex: 1, flexDirection: 'column', gap: '1rem' }}>
            {RULES.map((rule, i) => (
                <Accordion sx={{ boxShadow: 'none', width: '50vw', borderWidth: '2px' }} className="icon-bg gold-border" key={i}>
                    <AccordionSummary expandIcon={<ExpandMore color="secondary" />}>
                        <Typography component='span' variant='h5'>{rule.summary}</Typography>
                    </AccordionSummary>
                    <Divider flexItem />
                    <AccordionDetails sx={{ padding: 3, whiteSpace: 'pre-line' }}>
                        <Typography component='p' variant='body1'>{rule.details}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box >
    </>)
}