import { connect } from 'react-redux';
import { addUser } from '../../redux/actions';
import Form from './form-create-user';

const mapDispatchToProps = (dispatch: any) => ({
  addUser: (data: any) => dispatch(addUser(data)),
});

const FormContainer = connect(null, mapDispatchToProps)(Form);

export default FormContainer;
