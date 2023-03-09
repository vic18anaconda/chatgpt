import React, { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

export const EmployeeCard: React.FC = () => {
  const { employee } = useContext(EmployeeContext);

  return (
    
      <div>
        <h2>{employee.name}</h2>
        <p>{employee.jobTitle}</p>
        <p>{employee.email}</p>
      </div>


  
    
  );
};

