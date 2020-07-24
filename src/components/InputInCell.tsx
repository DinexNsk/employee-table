import React, { memo } from 'react';
import TableCell from '@material-ui/core/TableCell';
import Input from '@material-ui/core/Input';


type Props = {
    id: string,
    type?: string,
    placeholder?: string,
    defaultValue?: string | number,
    required?: boolean,
};

export const InputInCell = memo(({
    id,
    type = 'text',
    placeholder,
    defaultValue,
    required,
}: Props) => {
    return (
        <TableCell>
            <Input
                id={id}
                type={type}
                placeholder={placeholder}
                defaultValue={defaultValue}
                required={required} />
        </TableCell>
    )
})