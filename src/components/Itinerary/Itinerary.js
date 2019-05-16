import React from 'react'
import moment from 'moment'

const  Itinerary = (props) => {
    const { name, country, city, departure_date, return_date } = props.trip

        return(
            <div>
                <div className='row'>
                    <h1>{country}</h1>
                    <div>
                        <p><span>{departure_date.format('MMM Do YY')}</span> - <span>{return_date.format('MMM Do YY')}</span></p>
                        <p>{moment().endOf(departure_date).to(return_date)}</p>
                    </div>
                </div>
            </div>
        )
}

export default Itinerary