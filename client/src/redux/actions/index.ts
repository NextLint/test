import { IUser } from '../../types';
import { usersAPI } from '../../api/api';

export const actions = {
  setUsers: (users: Array<IUser>) => ({ type: 'SET-USERS', users } as const),
  addUser: (user: IUser) => ({ type: 'ADD-USER', user } as const),
};

export const getUsers = () => async (dispatch: any) => {
  const data = await usersAPI.getUsers();
  dispatch(actions.setUsers(data));
};

export const addUser = (data: any) => async (dispatch: any) => {
  await usersAPI.addUser(data);
  dispatch(actions.addUser(data));
};
