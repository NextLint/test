export interface IUser {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
}

export interface IUsersReducer {
  users: Array<IUser>;
}
