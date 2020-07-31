import { connect } from 'react-redux';
import ContentList from './content-list';

const mapStateToProps = (state: any) => ({
  users: state.users.users,
});

const mapDispatchToProps = (dispatch: any) => ({});

const ContentListContainer = connect(mapStateToProps, mapDispatchToProps)(ContentList);

export default ContentListContainer;
