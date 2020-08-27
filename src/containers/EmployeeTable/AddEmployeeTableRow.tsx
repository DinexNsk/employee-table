import React, { useState } from 'react';
import { EmployeeItem } from '../../redux/types';

import { CelledInputs } from '../../components/CelledInputs';
import { isNotEmptyKeys } from '../../utils/utils';


const initialData: EmployeeItem = {
  firstName: '',
  lastName: '',
  position: '',
  employmentDate: new Date(),
  department: 0,
}

type Props = {
  onClose: () => void,
  onAddVerify: (data: EmployeeItem) => void,
};

export const AddEmployeeTableRow = ({
  onClose,
  onAddVerify,
}: Props) => {
  const [employee, setEmployee] = useState<EmployeeItem>(initialData);


  const onChange = (event: React.FormEvent<HTMLTableRowElement>) => {
    const id = (event.target as HTMLInputElement).id;
    let value: string | Date = (event.target as HTMLInputElement).value;
    if (id === 'employmentDate') {
      value = new Date(value);
    }
    
    setEmployee({ ...employee, [id]: value });
  };

  const validateAndSubmit = () => {
    if(isNotEmptyKeys(employee)) {
      onAddVerify(employee);
      onClose();
    }
  }

    return (
      <CelledInputs
        data={{}}
        onChange={onChange}
        validateAndSubmit={validateAndSubmit}
        onClose={onClose}
      />
    )
  }