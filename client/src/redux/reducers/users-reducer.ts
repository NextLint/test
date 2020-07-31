import { IUsersReducer, IUser } from '../../types';

const initialState: IUsersReducer = {
  users: [],
};

const users = (state = initialState, action: any): IUsersReducer => {
  switch (action.type) {
    case 'SET-USERS':
      const users = action.users.map((user: IUser, index: number) => ({
        id: index + 1,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
      }));
      return Object.assign({}, state, {
        users: users,
      });
    case 'ADD-USER':
      const id = state.users.length + 1;
      const user = {
        id: id,
        first_name: action.user.first_name,
        last_name: action.user.last_name,
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
