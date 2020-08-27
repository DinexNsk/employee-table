import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import { EmployeeItem } from '../redux/types';

import { IconButtonInCell } from '../components/IconButtonInCell';
import { InputInCell } from '../components/InputInCell';


type Props = {
    data: EmployeeItem | Partial<EmployeeItem>,
    onChange?: (event: React.FormEvent<HTMLTableRowElement>) => void,
    validateAndSubmit: () => void,
    onClose: () => void,
};

export const CelledInputs = ({
  data: {
    employmentDate,
    firstName,
    lastName,
    position,
    department,
    id,
    mentorId,
  },
  onChange,
  validateAndSubmit,
  onClose,
}: Props) => {
    const defaultDate = employmentDate ? new Date (employmentDate).toISOString().slice(0, 16) : '';

    return (
        <TableRow onChange={onChange} hover>
          <IconButtonInCell onClick={validateAndSubmit} type='submit' variant='done'/>
          <IconButtonInCell onClick={onClose} variant='close'/>

          <InputInCell id='firstName' placeholder='First Name' defaultValue={firstName} required/>
          <InputInCell id='lastName' placeholder='Last Name' defaultValue={lastName} required/>
          <InputInCell id='position' placeholder='Position' defaultValue={position} required/>
          <InputInCell id='employmentDate' type='datetime-local' defaultValue={defaultDate} required/>
          <InputInCell id='department' type='number' placeholder='Department' defaultValue={department} required/>
          <InputInCell id='id' type='number' placeholder='Id' defaultValue={id} />
          <InputInCell id='mentorId' type='number' placeholder='MentorId' defaultValue={mentorId} />
        </TableRow>
    )
  }