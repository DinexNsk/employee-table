import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';

import { Employee } from '../../redux/types';
import { removeEmployee, addEmployee, updateEmployee } from '../../redux/actions';

import { AddEmployeeButton } from '../../components/AddEmployeeButton';

import { EditableTableRow } from './EditableTableRow';
import { TableRowWithData } from './TableRowWithData';
import { EmployeeTableHead } from './EmployeeTableHead';

import { fields } from '../../utils/data';
import { selectors } from '../../redux/selectors';


export const EmployeeTable = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectors.employees);
  const [editableRow, setEditableRow] = useState<number | null>(null);
  const [addEmployeeRow, setAddEmployeeRow] = useState(false);

  const deleteEmployee = (index: number) => {
    dispatch(removeEmployee(index));
  };

  const addEmployeee = (employee: Employee) => {
    dispatch(addEmployee(employee));
    setEditableRow(null)
  };

  const updateEmployeee = (employee: Partial<Employee>, index: number) => {
    dispatch(updateEmployee({ employee, index }));
    setEditableRow(null);
  }

  const showAddEmployeeRow = () => {
    setAddEmployeeRow(true)
  }

  const cancelAdding = () => {
    setAddEmployeeRow(false)
  }

  const cancelEditing = () => {
    setEditableRow(null)
  }

  const showEditRow = (index: number) => {
    setEditableRow(index)
  };

  return (
    <Box padding={2}>
      <AddEmployeeButton onClick={showAddEmployeeRow} disabled={editableRow !== null} />
      <form>
        <TableContainer component={Paper} elevation={6}>
          <Table>
            <EmployeeTableHead fields={fields} />
            <TableBody>
              {data.map((employee, index) => (
                editableRow === index
                  ? <EditableTableRow
                    key={`key${index}`}
                    data={employee}
                    onClose={cancelEditing}
                    onVerify={(data: Employee) => updateEmployeee(data, index)}
                  />
                  : <TableRowWithData
                    key={`key${index}`}
                    employee={employee}
                    onClickEdit={() => showEditRow(index)}
                    removeItem={() => deleteEmployee(index)}
                    disableEditing={addEmployeeRow || (editableRow !== null && editableRow !== index)}
                  />
              ))}
              {addEmployeeRow &&
                <EditableTableRow
                  data={{}}
                  onClose={cancelAdding}
                  type='add'
                  onVerify={(data: Employee) => addEmployeee(data)} />
              }
            </TableBody>
          </Table>
        </TableContainer>
      </form>
    </Box>
  );
}