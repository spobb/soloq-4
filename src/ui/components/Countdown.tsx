import { ReactElement, useEffect, useState } from "react";
import { Stack, Typography, Divider } from "@mui/material";

import './Countdown.css';

type SplitDate = {
    days: string[];
    hours: string[];
    minutes: string[];
    seconds: string[];
};

function DigitGroup({ digits, label }: { digits: string[], label?: string, color?: string }) {
    return (<>
        <Stack direction="row" alignItems="baseline">
            {digits.map((digit, index) => (
                <Typography
                    component='span'
                    className="countdown-digit"
                    fontSize='2rem'
                    key={`${label || ''}-${index}-${digit}`}
                >
                    {digit}
                </Typography>
            ))}
            {label &&
                <Typography
                    component='span'
                    fontSize='1.5rem'
                >
                    &nbsp;{label}
                </Typography>}
        </Stack>
    </>
    );
}

function Colon() {
    return (
        <Typography
            component='span'
            fontSize='1.5rem'
        >:</Typography>
    );
}

export function Countdown(): ReactElement {
    const deadline = new Date(parseInt(import.meta.env.VITE_CHALLENGE_DEADLINE) * 1000).getTime();
    const [timeLeft, setTimeLeft] = useState<number>(deadline - Date.now());
    const [splitDate, setSplitDate] = useState<SplitDate>();

    useEffect(() => {
        const interval = setInterval(() => {
            const newTimeLeft = deadline - Date.now();
            if (newTimeLeft <= 0) {
                clearInterval(interval);
                setTimeLeft(0);
            } else {
                setTimeLeft(newTimeLeft);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [deadline]);

    useEffect(() => {
        setSplitDate(getSplitDate(timeLeft));
    }, [timeLeft]);

    function getSplitDate(ms: number) {
        const totalSeconds = Math.floor(ms / 1000);

        const days = Math.floor(totalSeconds / 86400).toString().split('');
        const hours = Math.floor((totalSeconds % 86400) / 3600).toString().padStart(2, '0').split('');
        const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0').split('');
        const seconds = (totalSeconds % 60).toString().padStart(2, '0').split('');

        return { days, hours, minutes, seconds };
    }

    return (
        <Stack direction='row' spacing={0.5} alignItems="baseline">
            <DigitGroup digits={splitDate?.days || []} label="jours" />
            <Divider flexItem orientation="vertical" variant="middle" sx={{ marginX: '2rem !important' }} />
            <DigitGroup digits={splitDate?.hours || []} />
            <Colon />
            <DigitGroup digits={splitDate?.minutes || []} />
            <Colon />
            <DigitGroup digits={splitDate?.seconds || []} />
        </Stack>
    );
}