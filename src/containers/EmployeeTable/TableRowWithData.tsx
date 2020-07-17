import React, { useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core';

import { Employee } from '../../redux/types';
import { IconButtonInCell } from '../../components/IconButtonInCell';
import { RemoveItemDialog } from '../../components/RemoveItemDialog';

type Props = {
    employee: Employee,
    onClickEdit: () => void,
    disableEditing: boolean,
    removeItem: () => void,
};

const useStyles = makeStyles({
    root: disabled => ({
      opacity: disabled ? '0.2': '1',
      backgroundColor: disabled ? 'rgba(244, 143, 177, 0.16)': 'inherit',
    })
})

export const TableRowWithData = ({
  employee: {
    firstName,
    lastName,
    position,
    employmentDate,
    department,
    id,
    mentorId,
  },
  onClickEdit,
  disableEditing,
  removeItem,
}: Props) => {
    const classes = useStyles(disableEditing);
    const [openDialog, setOpenDialog] = useState(false);

    const onClickRemove = () => {
      setOpenDialog(true);
    }

    const onConfirmRemove = () => {
      removeItem();
      setOpenDialog(false);
    }

    return (
            <TableRow hover className={classes.root}>
              <RemoveItemDialog
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                onConfirm={onConfirmRemove}
                item={`${firstName} ${lastName}`}
              />
              <IconButtonInCell onClick={onClickEdit} icon={<EditIcon />} disabled={disableEditing}/>
              <IconButtonInCell onClick={onClickRemove} icon={<DeleteIcon />} disabled={disableEditing}/>
              <TableCell>{firstName}</TableCell>
              <TableCell>{lastName}</TableCell>
              <TableCell>{position}</TableCell>
              <TableCell>{employmentDate.toDateString()}</TableCell>
              <TableCell>{department}</TableCell>
              <TableCell>{id}</TableCell>
              <TableCell>{mentorId}</TableCell>
            </TableRow>
    )
  };

  type ReturnProps = ReturnType<typeof TableRowWithData>;