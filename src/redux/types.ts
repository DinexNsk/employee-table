export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';


export type EmployeeItem = {
    id?: number,
    firstName: string
    lastName: string
    position: string
    employmentDate: Date
    mentorId?: number
    department: number
}

export type AddEmployeeAction = {
    type: typeof ADD_EMPLOYEE,
    employee: EmployeeItem,
}
export type RemoveEmployeeAction = {
    type: typeof REMOVE_EMPLOYEE,
    id: number,
};

export type UpdateEmploeePayload = {
    id: number;
    employee: Partial<EmployeeItem>
};

export type Employees = {
    [key: string]: EmployeeItem,
  }
export type EmployeesData = {
    employees: Employees,
    ids: number[],
    lastId: number,
}

export type EmployeesState = {
    data: EmployeesData,
}

export type UpdateEmployeeAction = {
    type: typeof UPDATE_EMPLOYEE,
    payload: UpdateEmploeePayload,
}

export type EmployeesActionTypes = AddEmployeeAction | RemoveEmployeeAction | UpdateEmployeeAction;
