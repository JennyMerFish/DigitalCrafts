import React, { Component } from 'react'
export default class ClassComponent extends Component {
    state = {
        counter: 0,
        studentName: "Jenny",
};
    increaseCounter = () => {
        this.setState({counter: this.state.counter +1})
    }
    decreaseCounter =() => {
        this.setState({counter: this.state.counter -1})
    }
    changeStudentName =() => {
        let name = "Dustin"
        this.setState({ studentName: name })
    }
    
    render() {

        return (
            <div>
                <p>Class Counter</p>
                <p>Student Name : {this.state.studentName}</p>
                <p>Counter : {this.state.counter}</p>
                <button onClick={this.increaseCounter}>Increase</button>
                <button onClick={this.decreaseCounter}>Decrease</button>
                <button onClick={this.changeStudentName}>Change the Student</button>
            </div>
        )
    }
}
