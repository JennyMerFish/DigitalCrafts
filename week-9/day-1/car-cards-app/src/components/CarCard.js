import React, { Component } from 'react'
import CurrencyFormat from 'react-currency-format';

export default class CarCard extends Component {
        state = {
            make: "Bugatti",
            model: "La voiture noire",
            engine: "v16",
            horsepower: "1500",
            price: "19000000",
            carImage: "https://uncrate.com/p/2021/06/bugatti-la-voiture-noire-1.jpg",
            image: [
              {
                primary: "https://uncrate.com/p/2021/06/bugatti-la-voiture-noire-1.jpg",
                secondary:
                  "https://www.carscoops.com/wp-content/uploads/2019/03/c64f9e1e-bugatti-la-voiture-noire-roadster-rendering-0-1024x554.jpg",
              },
            ],
            transmission: "7 speed dual clutch",
            topSpeed: [{ US: "261", Metric: "420" }],
            toggle: true
        };
      
        changePicture = () => {
            let image = this.state.toggle ? this.state.image[0].primary : this.state.image[0].secondary
            this.setState({carImage: image, toggle : !this.state.toggle})
            
        }
        render() {
            
        return (
            
            <div className = "allTogetherNow">
                <div className = "cardDiv">
                    <img src={this.state.carImage}/>
                    <button onClick={this.changePicture}>Pic Click</button>
                    <h3>{this.state.make}</h3>
                    <h3>{this.state.model}</h3>
                    <h3><CurrencyFormat value={this.state.price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h3>
                    <p>Engine: {this.state.engine}</p>
                    <p>Horsepower: {this.state.horsepower}</p>
                    <p>Transmission: {this.state.transmission}</p>
                    <h5>Top Speed:</h5>
                    <p>US: {this.state.topSpeed[0].US} Metric: {this.state.topSpeed[0].Metric}</p>
                </div>
            </div>
        )
    }
}
