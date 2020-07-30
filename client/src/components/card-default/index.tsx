import React from 'react';
import { useStyles } from './styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

interface IUserCardProps {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
}

const UserCard: React.FC<IUserCardProps> = props => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.number}>#{props.id}</div>
      <CardHeader
        className={classes.header}
        avatar={
          <Avatar aria-label="name" className={classes.avatar}>
            РЗ
          </Avatar>
        }
        title={Object.values(props.name).join(' ')}
        subheader={props.email}
        classes={{
          subheader: classes.subheader,
        }}
      />
    </Card>
  );
};

export default UserCard;
