
import { EmployeesState } from "./types";

interface AppState {
    employees: EmployeesState,
}

export const selectors = {
    employeesData: (state: AppState) => state.employees.data,
    ids: (state: AppState) => state.employees.data.ids,
};