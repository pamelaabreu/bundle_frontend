import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'

import APIKEYS from '../../config.json'

import Itinerary from '../../components/Itinerary/Itinerary'

const baseURL = 'http://localhost:5000'
const tripEndpointBase = '/trip/'
const itineraryEndpointBase = '/itinerary/'


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
        this.setState({itinerary:itinerary.data})

        console.log(APIKEYS.MQ_API_KEY)

        // const location = `${this.state.trip.city} ${this.state.trip.country}`
        // const locationToLonLat = await axios({
        //     method:'get',
        //     url:`http://www.mapquestapi.com/geocoding/v1/address?key=${APIKEYS.MQ_API_KEY}&location=${location}`
        // })

        // console.log(locationToLonLat.data.results[0].locations[0].displayLatLng)

        

    }
    render() {
        console.log(moment().endOf(this.state.trip.departure_date).to(this.state.trip.return_date))
        return(
            <div className='container mt-5'>
                <Itinerary info={this.state.itinerary} trip={this.state.trip} />
            </div>
        )
    }
}

export default Trip