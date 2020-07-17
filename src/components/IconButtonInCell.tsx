import React from 'react';
import TableCell from '@material-ui/core/TableCell';

// import styles from './EditableTableRow.module.css';
import { IconButton } from '@material-ui/core';

type Props = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    type?: 'submit' | 'button' | 'reset',
    color?: 'default' | 'inherit' | 'primary' | 'secondary',
    disabled?: boolean,
    icon: React.ReactChild
};

export const IconButtonInCell = ({
  type = 'button',
  onClick,
  color = 'default',
  disabled,
  icon,
}: Props) => {
    return (
        <TableCell width={30}>
            <IconButton
              onClick={onClick}
              type={type}
              color={color}
              disabled={disabled}
            >
              {icon}
            </IconButton>
          </TableCell>
    )
  }