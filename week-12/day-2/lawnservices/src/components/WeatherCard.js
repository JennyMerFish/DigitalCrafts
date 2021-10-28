import React from 'react'

export default function WeatherCard(props) {
   
    return (
        <div className="weatherCard">
            <h3>{props?.weather?.dt.toString()}</h3>
            <h3>{props?.weather?.weather[0]?.main}</h3>
            <div className="temp">
                <h4>Low {props?.weather?.temp?.min.toFixed(0)}&deg;F</h4>
                <h4>High {props?.weather?.temp?.max.toFixed(0)}&deg;F</h4>
            </div>
        </div>
    )
}
