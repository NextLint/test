import React from 'react';
import { useStyles } from './styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

interface IUserCardProps {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

const UserCard: React.FC<IUserCardProps> = props => {
  const classes = useStyles();

  const letters = props.firstName[0] + props.lastName[0];

  return (
    <Card className={classes.root}>
      <div className={classes.number}>#{props.id}</div>
      <CardHeader
        className={classes.header}
        avatar={
          <Avatar aria-label="name" className={classes.avatar}>
            {letters.toUpperCase()}
          </Avatar>
        }
        title={`${props.firstName} ${props.lastName}`}
        subheader={props.email}
        classes={{
          subheader: classes.subheader,
        }}
      />
    </Card>
  );
};

export default UserCard;
