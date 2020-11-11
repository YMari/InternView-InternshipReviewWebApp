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
        light: '#29648A',
        main: '#2E9CCA',
        dark: '#25274D',
        contrastText: '#fff',
    },
    info: {
        light: '#464866',
        main: '#AAABB8',
        dark: '#1976d2',
        contrastText: '#000',
    },
    background: {
      default: '#25274D'
      //default: '#2E9CCA'
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
      },
      // disabled: {
      //   color: '#fff'
      // }
    },
  }
});

export default theme
