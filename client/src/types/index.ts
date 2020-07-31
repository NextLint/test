export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface IUsersReducer {
  users: Array<IUser>;
}
