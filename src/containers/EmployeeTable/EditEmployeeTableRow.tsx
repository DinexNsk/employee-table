import React, { useState, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { EmployeeItem } from '../../redux/types';
import { selectors } from '../../redux/selectors';

import { CelledInputs } from '../../components/CelledInputs';
import { isNotEmptyKeys } from '../../utils/utils';


type Props = {
  onClose: () => void,
  onUpdateVerify: (data: Partial<EmployeeItem>, id: number) => void,
  itemId: number,
};


export const EditableTableRow = memo(({
  onClose,
  onUpdateVerify,
  itemId,
}: Props) => {
  const data = useSelector(selectors.employeesData).employees[itemId];
  const [employee, setEmployee] = useState<Partial<EmployeeItem>>({});

  const onChange = (event: React.FormEvent<HTMLTableRowElement>) => {
    const id = (event.target as HTMLInputElement).id;
    let value: string | Date = (event.target as HTMLInputElement).value;
    if (id === 'employmentDate') {
      value = new Date(value);
    }
    
    setEmployee({ ...employee, [id]: value });
  };
  
  const validateAndSubmit = useCallback(() => {
    if (!Object.keys(employee).length) {
      onClose();
    } else if (isNotEmptyKeys(employee)) {
      onUpdateVerify(employee, itemId);
      onClose();
    }
  }, [employee, itemId, onUpdateVerify, onClose]);


  return (
    <CelledInputs
      validateAndSubmit={validateAndSubmit}
      onClose={onClose}
      data={data}
      onChange={onChange}
    />
  )
})