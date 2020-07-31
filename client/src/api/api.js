import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/',
});

export const usersAPI = {
  getUsers() {
    return instance.get('users/').then(res => res.data);
  },
  addUser(data) {
    return instance
      .post('users/add', data)
      .then(res => console.log(res.data))
      .catch(error => console.log(error));
  },
};
