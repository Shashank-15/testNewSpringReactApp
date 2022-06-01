import React, { Component } from 'react';
import Employeeservices from '../services/Employeeservices';

class Listemployeecomponets extends Component {
    constructor(props){
        super(props)
        this.state={
            employees:[]
        }
        this.addemployee=this.addemployee.bind(this)
        this.editEmployee=this.editEmployee.bind(this)
        this.deleteEmployee=this.deleteEmployee.bind(this)
        this.viewEmployee=this.viewEmployee.bind(this)
        
    }
    deleteEmployee(id)
    {
        Employeeservices.deleteEmployee(id).then(res=>{
            this.setState({employees: this.state.employees.filter(employee=>employee.id !==id)})

        });

    }
    editEmployee(id)
    {
        this.props.history.push(`/update-employee/${id}`)
    }

    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`)

    }
    componentDidMount()
    {
        Employeeservices.getEmployees().then((res)=>{
            this.setState({employees: res.data});

        });
    }

    addemployee()
    {
        this.props.history.push('/add-employee');
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div >
                    <button className="btn btn-primary" onClick={this.addemployee}>Add Employee</button>
                </div>
                <div className="row">
                <table className="table table-striped table-bordered">
                <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email ID</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>

                            {
                                this.state.employees.map(
                                    employee=>
                                    <tr key={employee.id}>
                                        <td>{employee.firstname}</td>
                                        <td>{employee.lastname}</td>
                                        <td>{employee.emailId}</td> 
                                        <td>
                                            <button onClick={()=>this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft:"10px"}} onClick={()=>this.deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                                            <button onClick={()=>this.viewEmployee(employee.id)} className="btn btn-info">view</button>
                                            
                                            </td>                               
                                    </tr>                              
                                )
                            }              
                        </tbody>
                    </table>
             </div>
            </div>
        );
    }
}

export default Listemployeecomponets;