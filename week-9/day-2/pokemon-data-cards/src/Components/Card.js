import React, { Component } from 'react'
import PropTypes from "prop-types";

export default class Card extends Component {
    state = {
        picToggle: true,
        pokes: this.props.pokemon
    }
    flip = () => {
        this.setState({picToggle: !this.state.picToggle})
    }  
    // onDeleteByIndex = (e) => {
    //     const {pokes } = this.state
    //     this.setState(({pokes: this.state.pokes.filter(function(index) {
    //         return index !== e.target.value
    //     })}));
    // }
    render() {
       
    const { picToggle } = this.state
        return (
            <div className = "card">
                <img src={picToggle ? this.state.pokes.sprites.front: this.state.pokes.sprites.back}/>
                <h1>{this.state.pokes.name}</h1>
                <h2>{this.state.pokes.id}</h2>
                <button onClick={this.flip}>Flipper</button>
                <button>Delete</button>



            </div>
            
        )
    }
}
