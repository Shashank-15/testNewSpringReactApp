import React, { Component } from 'react';
import Employeeservices from '../services/Employeeservices';


class Updateemployeecomponents extends Component {
    constructor(props){
        super(props)
        this.state ={
            id: this.props.match.params.id,
            firstname:'',
            lastname:'',
            emailId:''

        }
        this.changefirstnamehandler=this.changefirstnamehandler.bind(this);
        this.changelastnamehandler=this.changelastnamehandler.bind(this);
        this.changeemailIdhandler=this.changeemailIdhandler.bind(this);
        this.updateEmployee=this.updateEmployee.bind(this);

    }
    componentDidMount()
    {
        Employeeservices.getEmployeeById(this.state.id).then((res) =>{
            let employee=res.data;
            this.setState({firstname:employee.firstname,
                lastname:employee.lastname,
                emailId:employee.emailId
            });
        });
    }


    updateEmployee= (e)=>
    {
        e.preventDefault();
        let employee={firstname:this.state.firstname,
            lastname:this.state.lastname,
            emailId:this.state.emailId};
        console.log('employee =>' +JSON.stringify(employee));
        
        Employeeservices.updateEmployee(employee,this.state.id).then(res =>{
            this.props.history.push("/employees");
        });
        
        

    }
    

    changefirstnamehandler=(event)=>{
        this.setState({firstname:event.target.value});

    }
    
    changelastnamehandler=(event)=>{
        this.setState({lastname:event.target.value});

    }
    
    
    changeemailIdhandler=(event)=>{
        this.setState({emailId:event.target.value});

    }
    cancel=()=>{
        this.props.history.push('/employees');

    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Updated Employee</h3>
                        <div className="card-body">
                            <form >
                                <div className="form-control">
                                    <label >First Name</label>
                                    <input type="text" placeholder="enter your firstname" name="firstname"className="form-control"
                                     value={this.state.firstname} onChange={this.changefirstnamehandler} />

                                </div>
                                <div className="form-control">
                                    <label >Last Name</label>
                                    <input type="text" placeholder="enter your  lastname" name="lastname"className="form-control"
                                     value={this.state.lastname} onChange={this.changelastnamehandler} />

                                </div>
                                <div className="form-control">
                                    <label >Email id</label>
                                    <input type="text" placeholder="enter your email Id" name="emailId"className="form-control"
                                     value={this.state.emailId} onChange={this.changeemailIdhandler} />

                                </div>
                                <div>
                                    <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>

                                </div>
 
                            </form>
                        </div>

                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default Updateemployeecomponents;