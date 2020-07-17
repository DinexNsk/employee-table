import {
    Employee,
    ADD_EMPLOYEE,
    REMOVE_EMPLOYEE,
    UPDATE_EMPLOYEE,
    UpdateEmploeePayload,
    AddEmployeeAction,
    RemoveEmployeeAction,
    UpdateEmployeeAction,
} from "./types";

export const addEmployee = (employee: Employee): AddEmployeeAction => ({
    type: ADD_EMPLOYEE,
    employee,
});

export const removeEmployee = (index: number): RemoveEmployeeAction => ({
    type: REMOVE_EMPLOYEE,
    index,
});
export const updateEmployee = (payload: UpdateEmploeePayload): UpdateEmployeeAction => ({
    type: UPDATE_EMPLOYEE,
    payload,
});