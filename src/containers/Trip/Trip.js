import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'

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
            itinerary:{}
        }
    }

    async componentDidMount() {
        
        const itinerary = await axios({
            method: 'get',
            url: `${itineraryEndpointBase}${1}`,
            baseURL,
        })
        this.setState({itinerary:itinerary.data})
    }
    render() {
        console.log(moment().endOf(this.state.trip.departure_date).to(this.state.trip.return_date))
        return(
            <>
                <Itinerary info={this.state.itinerary} trip={this.state.trip} />
            </>
        )
    }
}

export default Trip