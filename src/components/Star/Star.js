import React, { Component } from 'react';
import './Star.css'

class Star extends Component {

    constructor() {
        //any class that extends another class has to call super();
        super();

        //Set up variables for when we call states
        this.state = { userName: 'userName', userRole: 'userRole' };

        //Still not sure about this bit ?????????
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleRoleChange = this.handleRoleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleNameChange = (event) => {
        this.setState({ userName: event.target.value });
    }

    handleRoleChange = (event) => {
        this.setState({ userRole: event.target.value })
    }

    submit = () => {
        console.log('Submit button Working!');
        
    }

    render() {
        return (
            <div className="StarInput">
                <form>

                    <div>
                        Name:
                    <input onChange={this.handleNameChange}></input>
                        {this.state.userName}
                    </div>

                    <br />

                    <div>
                        Role:
                    <input onChange={this.handleRoleChange}></input>
                        {this.state.userRole}
                    </div>

                    <div>
                        <p>
                            {this.state.userName} is famous for {this.state.userRole}.
                    </p>
                    </div>

                    <div>
                        <button onClick={this.submit} type="button">Submit</button>
                    </div>
                </form>
            </div>

        );
    }
}

export default Star