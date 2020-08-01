import React, { useState, useCallback } from 'react';
import { styles } from './styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import MuiTextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ButtonAdd from '../button-default';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { Formik, Form, Field } from 'formik';
import { fieldToTextField, TextFieldProps } from 'formik-material-ui';
import { formValues } from '../../types';

interface IFormProps extends WithStyles<typeof styles> {
  className?: string;
  addUser: (user: formValues) => void;
}

const Input: React.FC<TextFieldProps> = props => {
  const {
    form: { setFieldValue },
    field: { name },
  } = props;
  const onChange = useCallback(
    event => {
      const { value } = event.target;
      setFieldValue(name, value);
    },
    [setFieldValue, name],
  );
  return <MuiTextField {...fieldToTextField(props)} onChange={onChange} />;
};

const FormAdd: React.FC<IFormProps> = props => {
  const [openForm, setOpenForm] = useState(false);
  const { classes, className } = props;

  const handleFormOpen = () => setOpenForm(true);
  const handleFormClose = () => setOpenForm(false);

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
        <Formik
          initialValues={{
            first_name: '',
            last_name: '',
            email: '',
          }}
          validate={(values: formValues) => {
            const errors: Partial<formValues> = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            handleFormClose();
            props.addUser(values);
          }}
        >
          {({ submitForm, isSubmitting }) => (
            <Form>
              <DialogContent className={clsx(classes.content, className)}>
                <Field
                  component={Input}
                  name="first_name"
                  type="text"
                  label="Имя"
                  autoFocus
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  color="secondary"
                />
                <Field
                  component={Input}
                  name="last_name"
                  type="text"
                  label="Фамилия"
                  autoFocus
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  color="secondary"
                />
                <Field
                  component={Input}
                  name="email"
                  type="email"
                  label="E-mail"
                  autoFocus
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  color="secondary"
                />
              </DialogContent>
              <DialogActions classes={{ root: classes.actions }}>
                <Button
                  fullWidth
                  classes={{ root: classes.button }}
                  onClick={submitForm}
                  disabled={isSubmitting}
                >
                  Создать
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(FormAdd);
