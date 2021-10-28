import React from 'react'
import { Link } from 'react-router-dom'

export default function Weather() {
    return (
        <div className="weatherPage">
            <Link to="/">Back Home</Link>
            <h1>Safety is our number 1 priority, so we don't work in storms. Check the weather forecast to see if we can schedule service, or if you need to water your plants!</h1>
        </div>
    )
}
