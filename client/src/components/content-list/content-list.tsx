import React, { useState } from 'react';
import styles from './styles.module.css';
import ButtonAdd from '../button-default';
import { IUser } from '../../types';
import UserCard from '../card-default';
import Form from '../form-create-user';

interface IContentListProps {
  users: Array<IUser>;
}

const ContentList: React.FC<IContentListProps> = props => {
  const [openForm, setOpenForm] = useState(false);

  const users = props.users.map(user => (
    <UserCard key={user.id} id={user.id} name={user.name} email={user.email} />
  ));

  const handleFormOpen = () => setOpenForm(true);
  const handleFormClose = () => setOpenForm(false);

  return (
    <div className={styles.content}>
      {users}
      <ButtonAdd handler={handleFormOpen} />
      <Form open={openForm} handler={handleFormClose} />
    </div>
  );
};

export default ContentList;
