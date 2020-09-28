import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
        light: '#70a8bc',
        main: '#40798c',
        dark: '#054d5f',
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
      default: '#F0F0F0'
    },
    text: {
      hint: '#40798c'  // primary main
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
});

export default theme
