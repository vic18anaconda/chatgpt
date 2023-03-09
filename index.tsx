import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { EmployeeProvider } from './context/EmployeeProvider';


ReactDOM.render(
  <React.StrictMode>
    <EmployeeProvider>
      <App />
    </EmployeeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();