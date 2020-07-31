import { IUsersReducer } from '../../types';

const initialState: IUsersReducer = {
  users: [],
};

const users = (state = initialState, action: any): IUsersReducer => {
  switch (action.type) {
    case 'SET-USERS':
      return Object.assign({}, state, {
        users: action.users,
      });
    default:
      return state;
  }
};

export default users;
