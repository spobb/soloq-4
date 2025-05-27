import { ReactElement } from "react";
import { Typography } from "@mui/material";

export function Winrate({ winRate }: { winRate: number }): ReactElement {
    return (
        <Typography
            className={
                winRate > 80 ? 'sheen' : ''
            }
            variant="h2"
            sx={{ flex: 1, fontSize: '2rem', display: 'flex', placeItems: 'center', paddingTop: '33%' }}>
            {winRate ?
                `${winRate.toFixed(2)}%` :
                '?'
            }
        </Typography>
    )
}