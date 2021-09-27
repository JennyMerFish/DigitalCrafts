import React, { Component } from 'react'

export default class MyProfile extends Component {
    state = {
        firstName: "Jennifer",
        lastName: "Neasbitt",
        city: "Houston",
        profilePic: "https://media-exp1.licdn.com/dms/image/C4E03AQErun9WM1sxRw/profile-displayphoto-shrink_200_200/0/1628856975947?e=1638403200&v=beta&t=qGfKKhlj-Be-PXbIZiosmH3HV7nh5Oy7PHhfXnFqDYU"
    };
    changeCity = () => {
        let city = "Atlanta"
        this.setState({city: city})

    }
    render() {
        return (
            <div>
                <p>{this.state.firstName} {this.state.lastName}</p>
                <p>{this.state.city}</p>
                <img src = {this.state.profilePic}></img>
                <button onClick={this.changeCity}>Change City</button>
                

            </div>
        )
    }
}
