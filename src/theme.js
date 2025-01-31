import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          boxShadow: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          textTransform: 'none',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#001533',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#001533',
      light: '#1a2d4d',
      dark: '#000c1f',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFB618',
      light: '#ffc44b',
      dark: '#cc9213',
      contrastText: '#001533',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
      light: '#f8fafc',
      lighter: '#f1f5f9',
    },
    text: {
      primary: '#001533',
      secondary: '#4a5568',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      textTransform: 'none',

    },
    h2: {
      fontWeight: 600,
      textTransform: 'none',

    },
    h3: {
      fontWeight: 600,
      textTransform: 'none',

    },
    h4: {
      fontWeight: 600,
      textTransform: 'none',

    },
    h5: {
      fontWeight: 500,
      textTransform: 'none',

    },
    h6: {
      fontWeight: 500,
      textTransform: 'none',
    },
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;