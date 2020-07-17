import { EmployeesState } from "./types";

interface AppState {
    employees: EmployeesState,
}

export const selectors = {
    employees: (state: AppState) => state.employees.data,
};