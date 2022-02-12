import axios from 'axios';

const API_URL = 'https://6203986a4d21c200170b9eb1.mockapi.io/';

// Get All list of employees
export const getAllEmployees = () => {
  return axios.get(API_URL + 'employees');
};

// Update the Current State of the employee
export const updateEmployeeState = (empId, state) => {
    return axios.put(API_URL + `employees/${empId}`, { state: state });
};

// Add new Entry of employee
export const addNewEmployeeRecord = (name, jobTitle, state) => {
  return axios.post(API_URL + `employees`, { name , jobTitle, state});
};