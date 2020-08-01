export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface IUserServerType {
  first_name: string;
  last_name: string;
  email: string;
}

export interface IUsersReducer {
  users: Array<IUser>;
}

export enum ActionType {
  SET_USERS = 'SET-USERS',
  ADD_USER = 'ADD-USER',
}

export type IAddUserAction = {
  type: ActionType.ADD_USER;
  user: IUser;
};

export type ISetUsersAction = {
  type: ActionType.SET_USERS;
  users: Array<IUser>;
};

export type formValues = {
  first_name: string;
  last_name: string;
  email: string;
};
