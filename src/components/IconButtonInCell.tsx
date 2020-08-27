import React, { memo } from 'react';
import TableCell from '@material-ui/core/TableCell';

import { IconButton } from '@material-ui/core';
import { variantIcons, Variants } from '../utils/variantIcons';

type Props = {
  onClick: () => void,
  type?: 'submit' | 'button' | 'reset',
  color?: 'default' | 'inherit' | 'primary' | 'secondary',
  disabled?: boolean,
  variant: Variants,
};

export const IconButtonInCell = memo(({
  type = 'button',
  onClick,
  color = 'default',
  disabled,
  variant,
}: Props) => {
  const Icon = variantIcons[variant];

  return (
    <TableCell width={30}>
      <IconButton
        onClick={onClick}
        type={type}
        color={color}
        disabled={disabled}
      >
        <Icon />
      </IconButton>
    </TableCell>
  )
});