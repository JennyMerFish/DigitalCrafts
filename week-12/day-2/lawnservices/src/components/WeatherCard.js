import React from 'react'

export default function WeatherCard(props) {
const changeDate =(date) => {
    // const d = new Date()
    // const localTime = d.getTime()
    // const localOffset = d.getTimezoneOffset() * 60000
    const utc = date
    let houston = utc + (1000 * -18000)
    const nd = new Date(houston)
    return nd
}
    return (
        <div className="weatherCard">
            {/* <h3>{changeDate(props?.weather?.dt)}</h3> */}
            <h3>{props?.weather?.weather[0]?.main}</h3>
            <h4>High {props?.weather?.temp?.max.toFixed(0)}&deg;F</h4>
                <h4>Low {props?.weather?.temp?.min.toFixed(0)}&deg;F</h4>
                
            
        </div>
    )
}
