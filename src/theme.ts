import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#C9A24B',
            dark: '#9C7A2F',
            light: '#E4C77A',
        },
        secondary: {
            main: '#7B8CFF',
        },
        background: {
            default: '#0A0A0E',
            paper: '#14141B',
        },
        text: {
            primary: '#F3F1EA',
            secondary: 'rgba(243, 241, 234, 0.65)',
        },
        divider: 'rgba(201, 162, 75, 0.18)',
    },
    typography: {
        fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: { fontWeight: 700 },
        h2: { fontWeight: 700 },
        h3: { fontWeight: 700 },
        h4: { fontWeight: 600 },
        button: { textTransform: 'none', fontWeight: 600 },
    },
    shape: {
        borderRadius: 14,
    },
});

export default theme;
