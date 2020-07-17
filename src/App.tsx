import React from 'react';
import { Box } from '@material-ui/core';

import { EmployeeTable } from './containers/EmployeeTable/EmployeeTable';

function App() {
  return (
    <Box bgcolor='background.default' height='100vh'>
      <EmployeeTable />
    </Box>
  );
}

export default App;
