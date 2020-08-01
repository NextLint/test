import { IUser, ISetUsersAction, IAddUserAction } from '../../types';
import { usersAPI } from '../../api/api';
import { Dispatch } from 'redux';

export const actions = {
  setUsers: (users: Array<IUser>) => ({ type: 'SET-USERS', users } as ISetUsersAction),
  addUser: (user: IUser) => ({ type: 'ADD-USER', user } as IAddUserAction),
};

export const getUsers = () => async (dispatch: Dispatch<ISetUsersAction>) => {
  const data = await usersAPI.getUsers();
  dispatch(actions.setUsers(data));
};

export const addUser = (data: any) => async (dispatch: Dispatch<IAddUserAction>) => {
  await usersAPI.addUser(data);
  dispatch(actions.addUser(data));
};
