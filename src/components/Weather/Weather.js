import React from 'react'
import WeatherCard from '../WeatherCard/WeatherCard'

const  Weather = (props) => {
    console.log(props.weatherInfo)
        return(
            <div className='row'>
                {   
                    props.weatherInfo.map( (e, i) => <WeatherCard weather={ e } />)
                }   
            </div>
        )

}

export default Weather