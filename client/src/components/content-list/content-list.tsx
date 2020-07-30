import React from 'react';
import styles from './styles.module.css';
import ButtonAdd from '../button-default';
import { IUser } from '../../types';
import UserCard from '../card-default';

interface IContentListProps {
  users: Array<IUser>;
}

const ContentList: React.FC<IContentListProps> = props => {
  const users = props.users.map(user => (
    <UserCard key={user.id} id={user.id} name={user.name} email={user.email} />
  ));

  return (
    <div className={styles.content}>
      {users}
      <ButtonAdd />
    </div>
  );
};

export default ContentList;
