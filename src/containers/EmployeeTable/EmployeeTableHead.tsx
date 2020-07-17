import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


type Props = {
  children?: React.ReactChild,
  fields: string[],
}

export const EmployeeTableHead = ({
    children,
    fields,
}: Props) => {

    return (
        <TableHead>
            <TableRow>
                <TableCell colSpan={2}>{children}</TableCell>
                {fields.map((field, index) => <TableCell key={`${field}${index}`}>{field}</TableCell>)}
            </TableRow>
        </TableHead>
    );
}