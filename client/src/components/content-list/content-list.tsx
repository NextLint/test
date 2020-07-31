import React, { useEffect } from 'react';
import styles from './styles.module.css';
import { IUser } from '../../types';
import UserCard from '../card-default';
import FormContainer from '../form-create-user';

interface IContentListProps {
  users: Array<IUser>;
  getUsers: () => void;
}

const ContentList: React.FC<IContentListProps> = props => {
  useEffect(() => {
    props.getUsers();
  }, []);

  const users = props.users.map(user => (
    <UserCard
      key={user.id}
      id={user.id}
      first_name={user.first_name}
      last_name={user.last_name}
      email={user.email}
    />
  ));

  return (
    <div className={styles.content}>
      {users}
      <FormContainer />
    </div>
  );
};

export default ContentList;
