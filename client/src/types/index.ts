// data structures

export interface IUser {
  id: string;
  num: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface IUserServerType {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
}

// reducers

export interface IUsersReducer {
  users: Array<IUser>;
}

// actions

export type IUsersReducerActions = IAddUserAction | ISetUsersAction;

export enum ActionType {
  SET_USERS = 'SET-USERS',
  ADD_USER = 'ADD-USER',
}

export type IAddUserAction = {
  type: ActionType.ADD_USER;
  user: IUserServerType;
};

export type ISetUsersAction = {
  type: ActionType.SET_USERS;
  users: Array<IUserServerType>;
};

// forms

export interface formValues {
  first_name: string;
  last_name: string;
  email: string;
}
