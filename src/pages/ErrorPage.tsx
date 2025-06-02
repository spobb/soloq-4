import { Box, Typography, Divider } from "@mui/material"

export function ErrorPage({ status = 404, message = 'Not Found' }: { status?: number, message?: string }) {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            flex: 1
        }}>
            <Typography component='span' fontSize='2rem'>{status}</Typography>
            <Divider orientation="vertical" sx={{ marginX: '1rem', height: '2rem', alignSelf: 'center' }} flexItem />
            <Typography color="text.disabled">{message}</Typography>
        </Box>
    )
}