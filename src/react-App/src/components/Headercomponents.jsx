import React, { Component } from 'react';

class Headercomponents extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            //employees:[]
        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-nd navbar-dark bg-light" >
                        <div>EMPLOYEE MANAGEMENT SYSTEM</div> 

                    </nav>

                </header>
            </div>
        );
    }
}

export default Headercomponents;