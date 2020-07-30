import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        boxShadow: '0px 0px 12px 0px rgba(50, 50, 50, 0.13)',
      },
    },
  },
});
