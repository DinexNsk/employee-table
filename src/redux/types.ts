export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';

type DepartmentId = number

interface Department {
  id: DepartmentId
  name: string
}

type EmployeeId = number;

export type Employee = {
    id?: number,
    firstName: string
    lastName: string
    position: string
    employmentDate: Date
    mentorId?: EmployeeId
    department: DepartmentId
}

export type AddEmployeeAction = {
    type: typeof ADD_EMPLOYEE,
    employee: Employee,
}
export type RemoveEmployeeAction = {
    type: typeof REMOVE_EMPLOYEE,
    index: number,
};

export type UpdateEmploeePayload = {
    index: number;
    employee: Partial<Employee>
};

export type EmployeesState = {
    data: Employee[]
}

export type UpdateEmployeeAction = {
    type: typeof UPDATE_EMPLOYEE,
    payload: UpdateEmploeePayload,
}

export type EmployeesActionTypes = AddEmployeeAction | RemoveEmployeeAction | UpdateEmployeeAction;
