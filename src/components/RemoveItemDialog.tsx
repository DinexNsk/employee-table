import React, { memo } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface Props {
    open: boolean,
    onClose?: () => void,
    onConfirm?: () => void,
    item?: string,
}

export const RemoveItemDialog = memo(({
    open,
    onClose,
    onConfirm,
    item
}: Props) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth={true}
        >
            <DialogTitle>
                {`Are you sure you want to remove item "${item}"`}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    This item will be deleted immediately. You can't undo this action
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color='inherit'>
                    Cancel
                </Button>
                <Button onClick={onConfirm} color='inherit'>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
});