import { EmployeesData } from "../redux/types";

export const fields = ['First Name', 'Last Name', 'Position', 'Employment date', 'Department', 'Id', 'Mentor Id'];

export const defaultEmployees: EmployeesData = {
  employees: {
    1: {
      id: 1,
      department: 2,
      firstName: 'Vasya',
      lastName: 'Pupkin',
      position: 'Junior',
      employmentDate: new Date(),
      mentorId: 1,
    },
    2: {
      id: 2,
      department: 3,
      firstName: 'Petya',
      lastName: 'Pupkin',
      position: 'Senior',
      employmentDate: new Date(),
      mentorId: 1,
    },
  },
  ids: [1, 2],
  lastId: 2,
};
