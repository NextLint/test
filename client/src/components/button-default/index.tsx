import React from 'react';
import { useStyles } from './styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import AddIcon from '@material-ui/icons/Add';

const ButtonAdd: React.FC = () => {
  const classes = useStyles();

  return (
    <ButtonBase className={classes.root}>
      <AddIcon className={classes.icon} />
    </ButtonBase>
  );
};

export default ButtonAdd;
