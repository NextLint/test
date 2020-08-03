import React, { useState, useCallback } from 'react';
import { useStyles } from './styles';
import Button from '@material-ui/core/Button';
import MuiTextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ButtonAdd from '../button-default';
import { Formik, Form, Field } from 'formik';
import { fieldToTextField, TextFieldProps } from 'formik-material-ui';
import { formValues } from '../../types';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/actions';

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

const FormAdd: React.FC = props => {
  const [openForm, setOpenForm] = useState(false);
  const classes = useStyles();

  const handleFormOpen = () => setOpenForm(true);
  const handleFormClose = () => setOpenForm(false);
  const dispatch = useDispatch();

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
        <DialogTitle disableTypography={true} className={classes.title}>
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
            dispatch(addUser(values));
          }}
        >
          {({ submitForm, isSubmitting }) => (
            <Form>
              <DialogContent className={classes.content}>
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
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  color="secondary"
                />
              </DialogContent>
              <DialogActions classes={{ root: classes.actions }}>
                <Button
                  fullWidth
                  className={classes.button}
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

export default FormAdd;
