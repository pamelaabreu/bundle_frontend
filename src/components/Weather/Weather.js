import React from 'react'

import WeatherCard from '../WeatherCard/WeatherCard'

const  Weather = (props) => {
    console.log(props.weatherInfo)
        return(
            <div className='col-xl-7 col-lg-12 col-md-12 col-sm-12 row ml-1' style={{}}>
                {   
                    props.weatherInfo.map( (e, i) => <WeatherCard weather={ e } index={ i }/>)
                }   
            </div>
        )

}

export default Weather