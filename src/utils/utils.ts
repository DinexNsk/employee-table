import { EmployeeItem } from "../redux/types";

export function isNotEmptyKeys<T>(object: T): boolean {
    for (let key in object) {
      if (String(object[key]) === '' ) {
        return false
      }
    }
    return true
  };

export  const isAllFieldsExists = (object: Partial<EmployeeItem>) => {
    return object.firstName && object.lastName && object.position && object.employmentDate && object.department;
  }

