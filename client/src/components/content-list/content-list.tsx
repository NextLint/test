import React from 'react';
import styles from './styles.module.css';
import { IUser } from '../../types';
import UserCard from '../card-default';
import Form from '../form-create-user';

interface IContentListProps {
  users: Array<IUser>;
}

const ContentList: React.FC<IContentListProps> = props => {
  const users = props.users.map(user => (
    <UserCard
      key={user.id}
      id={user.id}
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
