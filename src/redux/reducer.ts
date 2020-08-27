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
            const id = action.employee.id || state.data.lastId + 1;
            return {
                ...state,
                data: {
                    ...state.data,
                    employees: {
                        ...state.data.employees,
                        [id]: action.employee,
                    },
                    ids: [...state.data.ids, id],
                    lastId: id,
                },
            }
        case REMOVE_EMPLOYEE:
            const {[action.id]: deletedItem, ...newState} = state.data.employees;
            return {
                ...state,
                data: {
                    ...state.data,
                    employees: newState,
                    ids: state.data.ids.filter(el => el !== action.id),
                },
            }
        case UPDATE_EMPLOYEE:
            return {
                ...state,
                data: {
                    ...state.data,
                    employees: {
                        ...state.data.employees,
                        [action.payload.id]: {
                            ...state.data.employees[action.payload.id],
                            ...action.payload.employee
                        }
                    }
                },
            }
        default:
            return state;
    }
}