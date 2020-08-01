import { IUsersReducer, IUserServerType, IUsersReducerActions } from '../../types';

const initialState: IUsersReducer = {
  users: [],
};

const users = (state = initialState, action: IUsersReducerActions): IUsersReducer => {
  switch (action.type) {
    case 'SET-USERS':
      const users = action.users.map((user: IUserServerType, index: number) => ({
        id: index + 1,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
      }));
      return Object.assign({}, state, {
        users: users,
      });
    case 'ADD-USER':
      const id = state.users.length + 1;
      const user = {
        id: id,
        firstName: action.user.first_name,
        lastName: action.user.last_name,
        email: action.user.email,
      };
      return Object.assign({}, state, {
        users: [...state.users, user],
      });
    default:
      return state;
  }
};

export default users;
