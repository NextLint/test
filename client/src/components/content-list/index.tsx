import React, { useEffect } from 'react';
import styles from './styles.module.css';
import { IUser } from '../../types';
import UserCard from '../card-default';
import Form from '../form-create-user';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../redux/actions';

const ContentList: React.FC = props => {
  const usersArray: Array<IUser> = useSelector((state: any) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const users = usersArray.map(user => (
    <UserCard
      key={user.id}
      num={user.num}
      firstName={user.firstName}
      lastName={user.lastName}
      email={user.email}
    />
  ));

  return (
    <div className={styles.content}>
      {users}
      <Form />
    </div>
  );
};

export default ContentList;
