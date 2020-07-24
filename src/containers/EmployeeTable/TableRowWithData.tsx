import React, { useState, useCallback, memo } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core';

import { IconButtonInCell } from '../../components/IconButtonInCell';
import { RemoveItemDialog } from '../../components/RemoveItemDialog';
import { useSelector } from 'react-redux';
import { selectors } from '../../redux/selectors';

type Props = {
  onClickEdit: (id:number) => void,
  disableEditing: boolean,
  onConfirmRemove: (id: number) => void,
  itemId: number;
  hide?: boolean;
};

const useStyles = makeStyles({
  root: disabled => ({
    opacity: disabled ? '0.2' : '1',
    backgroundColor: disabled ? 'rgba(244, 143, 177, 0.16)' : 'inherit',
  })
});

export const TableRowWithData = memo(({
  onClickEdit,
  disableEditing,
  onConfirmRemove,
  itemId,
  hide,
}: Props) => {
  const data = useSelector(selectors.employeesData).employees[itemId];

  const {
    employmentDate,
    firstName,
    lastName,
    position,
    department,
    id,
    mentorId,
  } = data;

  const classes = useStyles(disableEditing);
  const [openDialog, setOpenDialog] = useState(false);

  const onClickRemove = useCallback(() => {
    setOpenDialog(true);
  }, []);

  const setCloseDialog = useCallback(() => {
    setOpenDialog(false);
  },[])

  const removeItem = useCallback(() => {
    onConfirmRemove(itemId);
    setOpenDialog(false);
  }, [itemId, onConfirmRemove]);

  const editItem = useCallback(() => {
    onClickEdit(itemId)
  }, [itemId, onClickEdit]);

  return (
    <TableRow hover className={classes.root}>
      <RemoveItemDialog
        open={openDialog}
        onClose={setCloseDialog}
        onConfirm={removeItem}
        item={`${firstName} ${lastName}`}
      />
      <IconButtonInCell onClick={editItem} variant='edit' disabled={disableEditing} />
      <IconButtonInCell onClick={onClickRemove} variant='delete' disabled={disableEditing} />
      <TableCell>{firstName}</TableCell>
      <TableCell>{lastName}</TableCell>
      <TableCell>{position}</TableCell>
      <TableCell>{employmentDate.toDateString()}</TableCell>
      <TableCell>{department}</TableCell>
      <TableCell>{id}</TableCell>
      <TableCell>{mentorId}</TableCell>
    </TableRow>
  )
});
