import React, { useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import { Employee } from '../../redux/types';

import { IconButtonInCell } from '../../components/IconButtonInCell';
import { InputInCell } from '../../components/InputInCell';

type Props = {
  data: Employee | Partial<Employee>,
  onClose: () => void,
  onVerify: (data: Employee) => void,
  type?: 'add' | 'modify',
};

export const EditableTableRow = ({
  data: {
    firstName,
    lastName,
    position,
    employmentDate,
    department,
    id,
    mentorId,
  },
  type = 'modify',
  onClose,
  onVerify,
}: Props) => {
  const [employee, setEmployee] = useState<any>({});

  const onChange = (event: React.FormEvent<HTMLTableRowElement>) => {
    const id = (event.target as HTMLInputElement).id;
    let value: string | Date = (event.target as HTMLInputElement).value;

    if (id === 'employmentDate') {
      value = new Date(value);
    }
    
    setEmployee({ ...employee, [id]: value });
  };

  const isAllFieldsExists = (object: any) => {
    return object.firstName && object.lastName && object.position && object.employmentDate && object.department;
  }

  const isNotEmptyFields = (object: any) => {
    for (let key in object) {
      if (object[key] === '') {
        return false
      }
    }
    return true
  }

  const validateAndSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (type === 'modify') {
      if (!Object.keys(employee).length) {
        onClose();
      } else if(isNotEmptyFields(employee)){
        onVerify(employee);
        onClose();
      }
    } else if(isAllFieldsExists(employee)) {
      onVerify(employee);
      onClose();
    }
  }

    const defaultDate = employmentDate ? new Date (employmentDate).toISOString().slice(0, 16) : '';

    return (
        <TableRow onChange={onChange} hover>
          <IconButtonInCell onClick={validateAndSubmit} type='submit' icon={<DoneIcon />}/>
          <IconButtonInCell onClick={onClose} icon={<CloseIcon />}/>

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