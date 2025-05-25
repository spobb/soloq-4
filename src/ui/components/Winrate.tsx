import { ReactElement } from "react";
import { Typography } from "@mui/material";

export function Winrate({ wins, losses }: { wins: number, losses: number }): ReactElement {
    const winrate = (wins / (wins + losses) * 100)

    return (
        <Typography
            className={
                winrate > 80 ? 'sheen' : ''
            }
            variant="h2"
            sx={{ flex: 1, fontSize: '2rem', display: 'flex', placeItems: 'center', paddingTop: '33%' }}>
            {winrate ?
                `${winrate.toFixed(2)}%` :
                '?'
            }
        </Typography>
    )
}