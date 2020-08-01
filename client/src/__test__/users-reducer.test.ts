import usersReducer from '../redux/reducers/users-reducer';
import { actions } from '../redux/actions';
import { IUsersReducer, IUserServerType } from '../types';

it('set users to state from server data', () => {
  let data: IUserServerType[] = [
    {
      first_name: 'exampleName',
      last_name: 'exampleLastName',
      email: 'example@gmail.com',
    },
    {
      first_name: 'exampleName',
      last_name: 'exampleLastName',
      email: 'example@gmail.com',
    },
  ];

  let action = actions.setUsers(data);

  let state: IUsersReducer = {
    users: [],
  };

  let newState: IUsersReducer = usersReducer(state, action);

  expect(
    (newState = {
      users: [
        {
          id: 1,
          firstName: 'exampleName',
          lastName: 'exampleLastName',
          email: 'example@gmail.com',
        },
        {
          id: 2,
          firstName: 'exampleName',
          lastName: 'exampleLastName',
          email: 'example@gmail.com',
        },
      ],
    }),
  );
});

it('add user to state', () => {
  let data: IUserServerType = {
    first_name: 'newUserName',
    last_name: 'newUserLastName',
    email: 'email.email.@email.com',
  };

  let action = actions.addUser(data);

  let state: IUsersReducer = {
    users: [
      {
        id: 1,
        firstName: 'exampleName',
        lastName: 'exampleLastName',
        email: 'example@gmail.com',
      },
    ],
  };

  let newState: IUsersReducer = usersReducer(state, action);

  expect(
    (newState = {
      users: [
        {
          id: 1,
          firstName: 'exampleName',
          lastName: 'exampleLastName',
          email: 'example@gmail.com',
        },
        {
          id: 2,
          firstName: 'newUserName',
          lastName: 'newUserLastName',
          email: 'email.email.@email.com',
        },
      ],
    }),
  );
});
