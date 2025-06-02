import { ReactNode } from "react";

import { Box, Divider, ButtonBase } from "@mui/material";
import SortIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useSummoner } from "features/SummonerContext";

export function ColumnHeader({ children, label }: { children: ReactNode, label: string }) {
    const { sortBy, setSortBy, sortDirection, setSortDirection } = useSummoner();
    const isSortedBy = sortBy == label;

    function handleClick() {
        if (isSortedBy) {
            setSortDirection(sortDirection == 'asc' ? 'desc' : 'asc');
        } else {
            setSortDirection('desc');
        }
        setSortBy(label);
    }
    return (
        <>
            <Box
                onClick={handleClick}
                sx={{
                    display: 'flex',
                    height: '100%',
                    alignItems: 'flex-end',
                    paddingBottom: '1rem',
                    justifyContent: 'center',
                }}
                role='button'
            >
                <Box sx={{ width: '3rem' }} />
                {children}
                <ButtonBase>
                    <SortIcon
                        color={isSortedBy ? 'primary' : 'disabled'}
                        sx={{
                            transform: sortDirection == 'asc'
                                ? isSortedBy ? 'scaleY(-1)' : 'scaleY(1)'
                                : isSortedBy ? 'scaleY(1)' : 'scaleY(-1)',
                            width: '3rem',
                        }}
                    />
                </ButtonBase>
            </Box>
            <Divider variant="middle" />
        </>
    );
}