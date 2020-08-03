import { ISetUsersAction, IAddUserAction, IUserServerType, formValues } from '../../types';
import { usersAPI } from '../../api/api';
import { Dispatch } from 'redux';

export const actions = {
  setUsers: (users: Array<IUserServerType>) => ({ type: 'SET-USERS', users } as ISetUsersAction),
  addUser: (user: IUserServerType) => ({ type: 'ADD-USER', user } as IAddUserAction),
};

export const getUsers = () => async (dispatch: Dispatch<ISetUsersAction>) => {
  const users = await usersAPI.getUsers();
  dispatch(actions.setUsers(users));
};

export const addUser = (data: formValues) => async (dispatch: Dispatch<IAddUserAction>) => {
  const responce = await usersAPI.addUser(data);
  if (responce.status === 201) {
    dispatch(actions.addUser(responce.data));
  }
};
