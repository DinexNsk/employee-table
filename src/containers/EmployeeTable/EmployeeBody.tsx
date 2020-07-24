import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TableBody from '@material-ui/core/TableBody';

import { EmployeeItem } from '../../redux/types';
import { removeEmployee, addEmployee, updateEmployee } from '../../redux/actions';
import { selectors } from '../../redux/selectors';

import { EditableTableRow } from './EditEmployeeTableRow';
import { TableRowWithData } from './TableRowWithData';
import { AddEmployeeTableRow } from './AddEmployeeTableRow';

type Props = {
    isAddRowActive?: boolean,
    editableRow: number | null,
    setEditableRow: (id: number | null) => void,
    cancelAdding: () => void;
}

export const EmployeeBody = memo(({
    isAddRowActive,
    cancelAdding,
    editableRow,
    setEditableRow,
}: Props) => {
    const dispatch = useDispatch();
    const { ids } = useSelector(selectors.employeesData);

    const deleteItem = useCallback((id: number) => {
        dispatch(removeEmployee(id));
    }, [dispatch]);

    const addItem = useCallback((item: EmployeeItem) => {
        dispatch(addEmployee(item));
        setEditableRow(null)
    }, [dispatch, setEditableRow]);

    const updateItem = useCallback((data: Partial<EmployeeItem>, id: number) => {
        dispatch(updateEmployee({ employee: data, id }));
        setEditableRow(null);
    }, [dispatch, setEditableRow]);

    const cancelEditing = useCallback(() => {
        setEditableRow(null)
    }, [setEditableRow]);

    const showEditRow = useCallback((id: number) => {
        setEditableRow(id)
    }, [setEditableRow]);

    return (
        <TableBody>
            {ids.map((id) => (
                editableRow === id
                    ? <EditableTableRow
                        key={id}
                        itemId={id}
                        onClose={cancelEditing}
                        onUpdateVerify={updateItem}
                    />
                    : <TableRowWithData
                        key={`table-row${id}`}
                        itemId={id}
                        onClickEdit={showEditRow}
                        onConfirmRemove={deleteItem}
                        disableEditing={isAddRowActive || (editableRow !== null && editableRow !== id)}
                    />
            ))}
            {isAddRowActive &&
                <AddEmployeeTableRow
                    onClose={cancelAdding}
                    onAddVerify={addItem} />
            }
        </TableBody>
    );
});