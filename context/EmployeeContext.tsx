import React from "react";
import { Employee } from "../data/employee";

interface EmployeeContextType {
  employee: Employee;
  setEmployee: React.Dispatch<React.SetStateAction<Employee>>;
}

export const EmployeeContext = React.createContext<EmployeeContextType>({
  employee: {
    name: "",
    jobTitle: "",
    email: "",
  },
  setEmployee: () => {},
});