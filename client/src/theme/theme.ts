import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        boxShadow: '0px 0px 12px 0px rgba(50, 50, 50, 0.13)',
      },
    },
    MuiCardHeader: {
      root: {
        padding: '22px',
      },
    },
    MuiAvatar: {
      root: {
        height: '56px',
        width: '56px',
      },
      colorDefault: {
        backgroundColor: '00A6B4',
      },
    },
    MuiTypography: {
      colorTextSecondary: {
        color: '#B9C6CF',
      },
      // hack
      body2: {
        fontSize: 'none',
      },
    },
    MuiSvgIcon: {
      // hack
      root: {
        fontSize: 'none',
      },
    },
    MuiDialogTitle: {
      root: {
        padding: 'none',
      },
    },
    MuiDialogContent: {
      root: {
        padding: 'none',
      },
    },
    MuiDialogActions: {
      root: {
        padding: 'none',
      },
    },
  },
  palette: {
    primary: { main: '#e1e7eb' },
    secondary: { main: '#00A6B4' },
  },
});
