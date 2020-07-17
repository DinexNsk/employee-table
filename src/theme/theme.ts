import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    overrides: {
        MuiTable: {
            root: {
                backgroundColor: '#424242',
            },
        },
        MuiTableRow: {
            root: {
                backgroundColor: '#424242',
            }
        },
        MuiContainer: {
            root: {
                backgroundColor: '#333333',
            }
        },
        MuiInput: {
            underline: {
                '&:after': {
                    borderBottom: '2px solid #90caf9'
                }
            }
        }
    },
  palette: {
    type: 'dark',
    primary: {
      main: '#333333',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#424242',
    },
    background: {
        default: '#333333',
        paper: '#333333',
    },
    text: {
        primary: '#fafafa',
    },
  },
});