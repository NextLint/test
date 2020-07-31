import { IUsersReducer } from '../../types';

const initialState: IUsersReducer = {
  users: [
    {
      id: 1,
      firstName: 'Елена',
      lastName: 'Медведева',
      email: 'elena.medvedeva@gmail.com',
    },
    {
      id: 2,
      firstName: 'Руслан',
      lastName: 'Золотарёв',
      email: 'zolotaryov.rusik@yandex.ru',
    },
  ],
};

const users = (state = initialState, action: any): IUsersReducer => {
  switch (action.type) {
    default:
      return state;
  }
};

export default users;
