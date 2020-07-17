import {
    EmployeesState,
    EmployeesActionTypes,
    ADD_EMPLOYEE,
    REMOVE_EMPLOYEE,
    UPDATE_EMPLOYEE,
} from "./types";
import { defaultEmployees } from "../utils/data";


const initialState: EmployeesState = {
    data: defaultEmployees,
};

export const employeesReducer = (
    state = initialState,
    action: EmployeesActionTypes,
): EmployeesState => {
    switch (action.type) {
        case ADD_EMPLOYEE:
            return {
                ...state,
                data: [...state.data, action.employee],
            }
        case REMOVE_EMPLOYEE:
            return {
                ...state,
                data: [...state.data.slice(0, action.index), ...state.data.slice(action.index + 1)],
            }
        case UPDATE_EMPLOYEE:
            const newEmployees = [...state.data];
            newEmployees[action.payload.index] = {
                ...newEmployees[action.payload.index],
                ...action.payload.employee,
            };
            return {
                ...state,
                data: newEmployees,
            }
        default:
            return state;
    }
}