import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
        light: '#2E9CCA',
        main: '#29648A',
        dark: '#25274D',
        contrastText: '#fff',
    },
    secondary: {
        light: '#a0dbd2',
        main: '#70a9a1',
        dark: '#427a73',
        contrastText: '#000',
    },
    info: {
        light: '#64b5f6',
        main: '#2196f3',
        dark: '#1976d2',
        contrastText: '#fff',
    },
    background: {
      default: '#25274D'
    },
    text: {
      hint: '#40798c'  // primary main
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none'
      }
    }
  }
});

export default theme
