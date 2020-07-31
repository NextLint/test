import React from 'react';
import { styles } from './styles';
import clsx from 'clsx';
import ButtonBase from '@material-ui/core/ButtonBase';
import AddIcon from '@material-ui/icons/Add';
import { withStyles, WithStyles } from '@material-ui/core/styles';

interface IButtonAddProps extends WithStyles<typeof styles> {
  handler: () => void;
  className?: string;
}

const ButtonAdd: React.FC<IButtonAddProps> = props => {
  const { classes, className, handler } = props;

  return (
    <ButtonBase className={clsx(classes.root, className)} onClick={handler}>
      <AddIcon className={clsx(classes.icon, className)} />
    </ButtonBase>
  );
};

export default withStyles(styles)(ButtonAdd);
