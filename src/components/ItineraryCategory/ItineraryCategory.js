import React from 'react'

const ItineraryCategory = (props) => {
    const { category } = props
    return(
        <div>
            <div> 
                <p>{category.name}</p>
                <p>Address: {category.address}</p>
                <p>Phone: {category.phone_number}</p>
                <p>{category.note}</p>
            </div>   
        </div>
    )
}

export default ItineraryCategory