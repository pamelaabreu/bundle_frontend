import React from 'react'


import ItineraryCategory from '../ItineraryCategory/ItineraryCategory'

const findCategories = (categories) => {
    const uniqueCategoryNames = {}
    categories.forEach( (e) => {
        if (!uniqueCategoryNames[e]) {
            uniqueCategoryNames[e] = 1
        } else {
            uniqueCategoryNames[e]++
        }
    })

    let categoryNamesUsedOnce = []
    Object.entries(uniqueCategoryNames).forEach( e => {
        console.log(e[1])
        if (e[1] === 1) {
            categoryNamesUsedOnce.push(e[0])
        }
    })
    
    return categoryNamesUsedOnce
}

const  Itinerary = (props) => {
    const itineraryCategoryNames = props.info.map( e => e.itinerary_name)
    const categories = findCategories(itineraryCategoryNames)
    console.log(categories)
    console.log(props.info)
        return(
            <div className='col-xl-5 col-lg-10 col-md-10 col-sm-12' style={{}}>
                <h5>Itinerary</h5>
                <div className='row' style={{}}>
                    {
                        categories.map( category => {
                            return(
                                <div className='card ml-3' style={{}}>
                                    <div className='card-header'>
                                        <h4 className='card-title'>{category}</h4>
                                    </div>
                                    {
                                        props.info.filter( e => e['itinerary_name'] === category).map( e => <ItineraryCategory category={e} /> )
                                    }
                                </div>
                            )   
                        })
                    }
                </div>
            </div>
        )
}

export default Itinerary