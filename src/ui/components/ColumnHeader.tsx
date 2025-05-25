import { ReactElement } from "react";

import { Box, Typography, Divider } from "@mui/material";
import SortIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export function ColumnHeader({ title }: { title: string }): ReactElement {
    return (<>
        <Box sx={{ display: 'flex', height: '100%', alignItems: 'flex-end', paddingBottom: '1rem', justifyContent: 'center' }}>
            <Box sx={{ width: '3rem' }} />
            <Typography color="text.disabled" flex={1} sx={{ textWrap: 'nowrap' }}>
                {title}
            </Typography>
            <SortIcon sx={{ width: '3rem' }} color="primary" />
        </Box>
        <Divider variant="middle" />
    </>)
}