import { connect } from 'react-redux';
import { addUser } from '../../redux/actions';
import Form from './form-create-user';
import { IUserServerType } from '../../types';

const mapDispatchToProps = (dispatch: any) => ({
  addUser: (user: IUserServerType) => dispatch(addUser(user)),
});

const FormContainer = connect(null, mapDispatchToProps)(Form);

export default FormContainer;
