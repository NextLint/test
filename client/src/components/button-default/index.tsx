import React from 'react';
import { useStyles } from './styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import AddIcon from '@material-ui/icons/Add';

interface IButtonAddProps {
  handler: () => void;
}

const Button: React.FC<IButtonAddProps> = props => {
  const classes = useStyles();

  return (
    <ButtonBase className={classes.root} onClick={props.handler}>
      <AddIcon className={classes.icon} />
    </ButtonBase>
  );
};

export default Button;
