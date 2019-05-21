import React from 'react'

const ItineraryCategory = (props) => {
    const { category } = props
    return(
        <div className='card-body'> 
            <p className='card-title'>{category.name}</p>
            <p className='card-text'>Address: {category.address}</p>
            <p className='card-text'>Phone: {category.phone_number}</p>
            <p className='card-text'>{category.note}</p>
        </div>   
    )
}

export default ItineraryCategory