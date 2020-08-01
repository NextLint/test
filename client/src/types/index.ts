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
