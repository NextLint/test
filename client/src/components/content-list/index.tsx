import { connect } from 'react-redux';
import ContentList from './content-list';
import { getUsers } from '../../redux/actions';

const mapStateToProps = (state: any) => ({
  users: state.users.users,
});

const mapDispatchToProps = (dispatch: any) => ({
  getUsers: () => dispatch(getUsers()),
});

const ContentListContainer = connect(mapStateToProps, mapDispatchToProps)(ContentList);

export default ContentListContainer;
