import React, { useState, memo, useCallback } from 'react';

import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';

import { AddEmployeeButton } from '../../components/AddEmployeeButton';

import { EmployeeTableHead } from './EmployeeTableHead';

import { fields } from '../../utils/data';
import { EmployeeBody } from './EmployeeBody';


export const EmployeeTable = memo(() => {
  const [editableRow, setEditableRow] = useState<number | null>(null);
  const [isAddRowActive, setIsAddRowActive] = useState(false);


  const showAddEmployeeRow = useCallback(() => {
    setIsAddRowActive(true)
  }, []);

  const cancelAdding = useCallback(() => {
    setIsAddRowActive(false)
  }, []);

  const putEditableRow = useCallback((id: number | null) => {
    setEditableRow(id);
  }, []);

  return (
    <Box padding={2}>
      <AddEmployeeButton onClick={showAddEmployeeRow} disabled={editableRow !== null} />
      <form>
        <TableContainer component={Paper} elevation={6}>
          <Table>
            <EmployeeTableHead fields={fields} />
            <EmployeeBody
              isAddRowActive={isAddRowActive}
              cancelAdding={cancelAdding}
              editableRow={editableRow}
              setEditableRow={putEditableRow}
            />
          </Table>
        </TableContainer>
      </form>
    </Box>
  );
});