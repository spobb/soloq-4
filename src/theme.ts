import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#B0B8C1',
            dark: '#29325F',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#C4A15B',
            contrastText: '#FFFFFF',
        },
        error: {
            main: '#E24C4B',
        },
        warning: {
            main: '#FF6D00',
        },
        info: {
            main: '#1A5CC8',
        },
        success: {
            main: '#FFB300',
        },
        background: {
            default: '#0B121F',
            paper: '#1E2534',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#B0B8C1',
        },
    },
    typography: {
        fontFamily: `'BeaufortForLoL', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
        h1: {
            fontWeight: 700,
            color: '#C4A15B',
        },
        h2: {
            fontWeight: 600,
            color: '#C4A15B',
        },
        body1: {
            color: '#B0B8C1',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#0B121F',
                    color: '#E2BA3D',
                    fontFamily: `'BeaufortForLoL', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: 'none',
                    textAlign: 'center',
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    '&:last-child td, &:last-child th': {
                        borderBottom: 'none',
                    },
                },
            },
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiPopover: {
            styleOverrides: {
                paper: {
                    border: '2px solid transparent',
                    borderImage: 'linear-gradient(var(--gold-light) 70%, var(--gold-dark)) 1',
                    background: 'var(--grey-dark)',
                }
            }
        },
    },
});