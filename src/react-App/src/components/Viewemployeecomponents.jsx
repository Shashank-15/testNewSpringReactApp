import React, { Component } from 'react';
import Employeeservices from '../services/Employeeservices';

class Viewemployeecomponents extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            employee: { }

            
        }
    }
    componentDidMount(){
        Employeeservices.getEmployeeById(this.state.id).then(res=>
            {
                this.setState({employee:res.data });
            }); 
    }
    
    render() {
        return (
            <div>
                <div className="card caol-md-6  offset-md-3">
                <h2 className="text-center">wellcome to view </h2>
                <div className="card-body">
                    <div className="row">
                        <label>Employee First Name:

                        </label>
                        <div>
                            {this.state.employee.firstname}
                        </div>

                    </div>

                </div>

                </div>
                
            </div>
        );
    }
}

export default Viewemployeecomponents;