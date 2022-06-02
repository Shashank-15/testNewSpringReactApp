import axios from 'axios';
const EMPLOYEE_API_BASE_URL= "https://testdemoazure.azurewebsites.net/api/v1/employees";

class Employeesrvices{
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL,employee);
    }
    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL+ '/' + employeeId);
    }
    updateEmployee(employee,employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL+ '/' + employeeId ,employee);
    }
    deleteEmployee  (employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL+ '/' + employeeId);
    }
   
}
export default new Employeesrvices()