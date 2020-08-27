import {
    EmployeeItem,
    ADD_EMPLOYEE,
    REMOVE_EMPLOYEE,
    UPDATE_EMPLOYEE,
    UpdateEmploeePayload,
    AddEmployeeAction,
    RemoveEmployeeAction,
    UpdateEmployeeAction,
} from "./types";

export const addEmployee = (employee: EmployeeItem): AddEmployeeAction => ({
    type: ADD_EMPLOYEE,
    employee,
});

export const removeEmployee = (id: number): RemoveEmployeeAction => ({
    type: REMOVE_EMPLOYEE,
    id,
});
export const updateEmployee = (payload: UpdateEmploeePayload): UpdateEmployeeAction => ({
    type: UPDATE_EMPLOYEE,
    payload,
});