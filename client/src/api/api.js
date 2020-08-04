import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/',
});

export const usersAPI = {
  getUsers() {
    return instance.get('users/');
  },
  addUser(data) {
    return instance.post('users/add', data);
  },
};
