import React, { useState } from 'react';
import { styles } from './styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ButtonAdd from '../button-default';
import { withStyles, WithStyles } from '@material-ui/core/styles';

interface IFormProps extends WithStyles<typeof styles> {
  className?: string;
}

const Form: React.FC<IFormProps> = props => {
  const [openForm, setOpenForm] = useState(false);
  const { classes, className } = props;

  const handleFormOpen = () => setOpenForm(true);
  const handleFormClose = () => setOpenForm(false);

  console.log('form');
  return (
    <div>
      <ButtonAdd handler={handleFormOpen} />
      <Dialog
        open={openForm}
        onClose={handleFormClose}
        aria-labelledby="form-dialog-title"
        classes={{
          paper: classes.root,
        }}
      >
        <DialogTitle disableTypography={true} className={clsx(classes.title, className)}>
          Создание пользователя
        </DialogTitle>
        <DialogContent className={clsx(classes.content, className)}>
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
        <DialogActions className={clsx(classes.actions, className)}>
          <Button fullWidth classes={{ root: classes.button }} onClick={handleFormClose}>
            Создать
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(Form);
