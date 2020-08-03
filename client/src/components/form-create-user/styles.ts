import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    width: '520px',
  },
  title: {
    fontSize: '18px',
    fontFamily: 'Roboto',
    fontWeight: 400,
    padding: '38px 34px',
  },
  content: {
    padding: '0px 34px',
  },
  actions: {
    padding: '35px',
  },
  button: {
    backgroundColor: '#00A6B4 !important',
    color: 'white !important',
    '&:hover': {
      backgroundColor: '#008894 !important',
    },
  },
});
