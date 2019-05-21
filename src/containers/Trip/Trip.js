import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'

import APIKEYS from '../../config.json'

import Itinerary from '../../components/Itinerary/Itinerary'
import Weather from '../../components/Weather/Weather'

const baseURL = 'http://localhost:5000'
const tripEndpointBase = '/trip/'
const itineraryEndpointBase = '/itinerary/'
const weatherEndpointBase = '/weather/'


class Trip extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trip:{
                name: 'Anniversary',
                country: 'Italy',
                city: 'Rome',
                departure_date: moment(),
                return_date: moment().add(10, 'days')
            },
            itinerary:[],
            weather_info:[]
        }
    }

    async componentDidMount() {
        
        const itinerary = await axios({
            method: 'get',
            url: `${itineraryEndpointBase}${1}`,
            baseURL,
        })
        

        console.log(APIKEYS.MQ_API_KEY)

        const location = `${this.state.trip.city} ${this.state.trip.country}`
        const mqLocation = await axios({
            method:'get',
            url:`http://www.mapquestapi.com/geocoding/v1/address?key=${APIKEYS.MQ_API_KEY}&location=${location}`
        })

        const locationLatLng = mqLocation.data.results[0].locations[0].displayLatLng
        const weather = await axios ({
            method:'get',
            url:weatherEndpointBase,
            params:{
                lat:locationLatLng.lat,
                lng:locationLatLng.lng
            },
            baseURL
        })

        weather.data.data.shift()
        
        this.setState({
            itinerary:itinerary.data,
            weather_info:weather.data.data.slice(0,5)
            })

    }
    render() {
        console.log(moment().endOf(this.state.trip.departure_date).to(this.state.trip.return_date))
        const { city, country, departure_date, return_date } = this.state.trip
        return(
            <div className='container mt-5'>
                <div className='row'>
                    <h1>{ city }, { country }</h1>
                    <div className='col-1'></div>
                    <div className='' style={{}}>
                        <p style={{ margin:'0' }}><span>{ departure_date.format('L') }</span> - <span>{ return_date.format('L') }</span></p>
                        <p style={{ textAlign:'center', margin:'0' }}>{ moment().endOf(departure_date).to(return_date) }</p>
                    </div>
                </div>
                <div className='row'>
                    <Itinerary info={ this.state.itinerary } trip={ this.state.trip } />
                    <Weather weatherInfo={ this.state.weather_info }/>
                </div>
            </div>
        )
    }
}

export default Trip