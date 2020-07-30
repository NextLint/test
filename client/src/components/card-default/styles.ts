import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '122px',
    minWidth: '410px',
    width: '410px',
  },
  number: {
    backgroundColor: '#f8f9fd',
    minWidth: '92px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Montserrat',
    fontSize: '40px',
    color: '#e1e7eb',
  },
  header: {
    flexGrow: 1,
    paddingLeft: '22px',
  },
  avatar: {
    backgroundColor: '#00A6B4',
  },
  subheader: {
    fontSize: '12px',
  },
}));
