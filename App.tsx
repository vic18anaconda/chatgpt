import React from "react";

import { EmployeeProvider } from "./context/EmployeeProvider";
import { EmployeeCard } from "./components/EmployeeCard";

export const App: React.FC = () => {
  return (
    <EmployeeProvider>
      <div className="App">
        <EmployeeCard />
      </div>
      
    </EmployeeProvider>
  );
};


export default App;
