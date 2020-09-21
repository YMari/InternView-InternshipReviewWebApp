import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
    },
    secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
    },
    info: {  // Appbar color maybe
        light: '#64b5f6',
        main: '#2196f3',
        dark: '#1976d2',
        contrastText: '#fff',
    }
  },
});

export default theme
