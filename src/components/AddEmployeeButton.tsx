import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Typography, Button } from '@material-ui/core';

type Props = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    disabled?: boolean,
}

export const AddEmployeeButton = ({
    onClick,
    disabled,
}: Props) => {
    return (
            <Button
                color='secondary'
                variant='contained'
                style={{ marginBottom: 20 }}
                onClick={onClick}
                disabled={disabled}
            >
                <Typography variant='body1'>Add employee</Typography>
                <AddIcon style={{ marginLeft: 10 }} />
            </Button>
    )
  }