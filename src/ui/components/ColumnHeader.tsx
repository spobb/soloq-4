import { ReactElement, useState } from "react";

import { Box, Typography, Divider, ButtonBase } from "@mui/material";
import SortIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export function ColumnHeader({ title, onClick, label }: { title: string, onClick: CallableFunction, label: string }): ReactElement {
    const [direction, setDirection] = useState<'asc' | 'desc'>('asc');


    return (<>
        <Box sx={{ display: 'flex', height: '100%', alignItems: 'flex-end', paddingBottom: '1rem', justifyContent: 'center' }}>
            <Box sx={{ width: '3rem' }} />
            <Typography color="text.disabled" flex={1} sx={{ textWrap: 'nowrap' }}>
                {title}
            </Typography>
            <ButtonBase onClick={() => { setDirection(direction == 'asc' ? 'desc' : 'asc'); onClick(label) }}>
                <SortIcon color="primary" sx={{
                    transform: direction == 'asc' ? 'scaleY(-1)' : 'scaleY(1)',
                    width: '3rem'
                }} />
            </ButtonBase>
        </Box >
        <Divider variant="middle" />
    </>)
}