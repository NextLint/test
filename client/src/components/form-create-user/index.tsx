import React from 'react';
import { useStyles } from './styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

interface IFormProps {
  open: boolean;
}

const Form: React.FC<IFormProps> = props => {
  const classes = useStyles();

  return (
    <div>
      <Dialog
        open={props.open}
        // onClose={handleClose}
        aria-labelledby="form-dialog-title"
        classes={{
          paper: classes.root,
        }}
      >
        <DialogTitle disableTypography={true} className={classes.title}>
          Создание пользователя
        </DialogTitle>
        <DialogContent className={classes.content}>
          <TextField
            autoFocus
            margin="normal"
            id="first-name"
            label="Имя"
            type="text"
            fullWidth
            variant="outlined"
            color="secondary"
          />
          <TextField
            autoFocus
            margin="normal"
            id="last-name"
            label="Фамилия"
            type="text"
            fullWidth
            variant="outlined"
            color="secondary"
          />
          <TextField
            autoFocus
            margin="normal"
            id="email"
            label="E-mail"
            type="email"
            fullWidth
            variant="outlined"
            color="secondary"
          />
        </DialogContent>
        <DialogActions className={classes.actions}>
          <Button fullWidth classes={{ root: classes.button }}>
            Создать
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Form;
