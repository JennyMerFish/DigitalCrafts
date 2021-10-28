import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { dispatchData } from '../redux/actions/WeatherActions'
import WeatherCard from './WeatherCard'
// const weatherAPI = process.env.REACT_APP_weatherAPIKEY

export default function Weather() {
const dispatch = useDispatch()
const weather = useSelector((state) => state.weatherData)
useEffect(() => {
    const getWeatherData = async () => {
        const getWeather = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=29.69&lon=-95.68&units=imperial&exclude=current,minutely,hourly,alerts&appid=750ea5847bbdbf22dec14f20d97e9f2e'
        )
        const jsonWeather = await getWeather.json();
        dispatchData(dispatch, jsonWeather)
    }
    getWeatherData()
    return () => {
        
    }
}, [])
// const newDate = new Date(Date.UTC(1635876000))
// console.log(newDate.toLocaleDateString)
    return (
        <div className="weatherPage">
            <Link to="/">Back Home</Link>
            <h1>Safety is our number 1 priority, so we don't work in storms. Check the weather forecast to see if we can schedule service, or if you need to water your plants!</h1>
            <h3>7 Day Forecast:</h3>
            {/* {weather?.data?.daily?.map((day) => (newArray.push(day.dt)))} */}
            {weather?.data?.daily?.map((day) => (<WeatherCard weather={day} />))}
            {/* {newArray?.map((day) => (<WeatherCard dates ={Date(day)} />))} */}

        </div>
    )
}
