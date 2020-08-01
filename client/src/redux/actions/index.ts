import { ISetUsersAction, IAddUserAction, IUserServerType } from '../../types';
import { usersAPI } from '../../api/api';
import { Dispatch } from 'redux';

export const actions = {
  setUsers: (users: Array<IUserServerType>) => ({ type: 'SET-USERS', users } as ISetUsersAction),
  addUser: (user: IUserServerType) => ({ type: 'ADD-USER', user } as IAddUserAction),
};

export const getUsers = () => async (dispatch: Dispatch<ISetUsersAction>) => {
  const users = await usersAPI.getUsers();
  console.log(users);
  dispatch(actions.setUsers(users));
};

export const addUser = (data: IUserServerType) => async (dispatch: Dispatch<IAddUserAction>) => {
  await usersAPI.addUser(data);
  dispatch(actions.addUser(data));
};
