import React, {useState} from "react";
import {Employee} from "../data/employee";
import { EmployeeContext } from "./EmployeeContext";

interface EmployeeProviderProps {
    children: React.ReactNode; 
}

export const EmployeeProvider: React.FC<EmployeeProviderProps> = ({
    children,
}) => {
    const [employee, setEmployee] = useState<Employee>({
      name: "Víctor José Oliva Martín",
      jobTitle: "Software Engineer",
      email: "victorolimorsy17@gmail.com",
    });

    return (
        <EmployeeContext.Provider value={{employee, setEmployee}}>
            {children}
        </EmployeeContext.Provider>
    );
};