import React from 'react'
import moment from 'moment'

import ItineraryCategory from '../ItineraryCategory/ItineraryCategory'

const findCategories = (categories) => {
    const uniqueCategories = {}
    categories.forEach( (e) => {
        if (!uniqueCategories[e]) {
            uniqueCategories[e] = 1
        } else {
            uniqueCategories[e]++
        }
    })

    let result = []
    Object.entries(uniqueCategories).forEach( e => {
        console.log(e[1])
        if (e[1] === 1) {
            result.push(e[0])
        }
    })
    
    return result
}

const  Itinerary = (props) => {
    const { name, country, city, departure_date, return_date } = props.trip
    const itineraryCategoryNames = props.info.map( e => e.itinerary_name)
    const categories = findCategories(itineraryCategoryNames)
    console.log(categories)
    console.log(props.info)
        return(
            <div>
                <div className='row'>
                    <h1>{country}</h1>
                    <div className='col-1'></div>
                    <div className='' style={{}}>
                        <p style={{margin:'0'}}><span>{departure_date.format('L')}</span> - <span>{return_date.format('L')}</span></p>
                        <p style={{textAlign:'center', margin:'0'}}>{moment().endOf(departure_date).to(return_date)}</p>
                    </div>
                </div>
                <div className=''>
                <h5>Itinerary</h5>
                    <div className='row'>
                        {
                            categories.map( category => {
                                return(
                                    <div style={{border:'1px solid black'}}>
                                        <h4>{category}</h4>
                                        {
                                            props.info.filter( e => e['itinerary_name'] === category).map( e => {
                                                return (
                                                    <ItineraryCategory category={e} />
                                                )
                                            })
                                        }
                                    </div>
                                )   
                            })}
                    </div>
                </div>
            </div>
        )
}

export default Itinerary