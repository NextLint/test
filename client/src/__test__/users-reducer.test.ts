import usersReducer from '../redux/reducers/users-reducer';
import { actions } from '../redux/actions';
import { IUsersReducer, IUserServerType } from '../types';

it('set users to state from server data', () => {
  const data: IUserServerType[] = [
    {
      _id: '12345',
      first_name: 'exampleName',
      last_name: 'exampleLastName',
      email: 'example@gmail.com',
    },
    {
      _id: '12345',
      first_name: 'exampleName',
      last_name: 'exampleLastName',
      email: 'example@gmail.com',
    },
  ];

  const action = actions.setUsers(data);

  const state: IUsersReducer = {
    users: [],
  };

  const newState: IUsersReducer = usersReducer(state, action);

  expect(
    newState ==
      {
        users: [
          {
            id: '12345',
            num: 1,
            firstName: 'exampleName',
            lastName: 'exampleLastName',
            email: 'example@gmail.com',
          },
          {
            id: '12345',
            num: 2,
            firstName: 'exampleName',
            lastName: 'exampleLastName',
            email: 'example@gmail.com',
          },
        ],
      },
  );
});

it('add user to state', () => {
  const data: IUserServerType = {
    _id: '12345',
    first_name: 'newUserName',
    last_name: 'newUserLastName',
    email: 'email.email.@email.com',
  };

  const action = actions.addUser(data);

  const state: IUsersReducer = {
    users: [
      {
        id: '12345',
        num: 1,
        firstName: 'exampleName',
        lastName: 'exampleLastName',
        email: 'example@gmail.com',
      },
    ],
  };

  const newState: IUsersReducer = usersReducer(state, action);

  expect(
    newState ==
      {
        users: [
          {
            id: '12345',
            num: 1,
            firstName: 'exampleName',
            lastName: 'exampleLastName',
            email: 'example@gmail.com',
          },
          {
            id: '12345',
            num: 2,
            firstName: 'newUserName',
            lastName: 'newUserLastName',
            email: 'email.email.@email.com',
          },
        ],
      },
  );
});
