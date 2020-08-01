import { connect } from 'react-redux';
import { addUser } from '../../redux/actions';
import Form from './form-create-user';
import { formValues } from '../../types';

const mapDispatchToProps = (dispatch: any) => ({
  addUser: (user: formValues) => dispatch(addUser(user)),
});

const FormContainer = connect(null, mapDispatchToProps)(Form);

export default FormContainer;
