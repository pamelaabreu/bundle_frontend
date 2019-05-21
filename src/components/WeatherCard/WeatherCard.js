import React from 'react'
import moment from 'moment'

const WeatherCard = (props) => {
    const { weather, index } = props
    return(
        <div className={`card ${ index!==0?' ml-3 ':null }`}>
            <div className='card-body'>
                <h6 className='card-title'>{moment.unix(weather.time).format('llll').slice(0,3)}</h6>
                <p className='card-text'>{weather.temperatureHigh} F</p>
                <p className='card-text'>{weather.temperatureLow} F</p>
            </div>
        </div>
    )
}

export default WeatherCard