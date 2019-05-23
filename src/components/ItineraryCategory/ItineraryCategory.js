import React from 'react'
import { parsePhoneNumber, ParseError } from 'libphonenumber-js'
import country_codes from '../../assets/country_codes.json'

const ItineraryCategory = (props) => {
    const { category, trip } = props
    let phoneNumber = ''
    try {
         phoneNumber = parsePhoneNumber(`+ ${category.phone_number}`, country_codes[trip.country.toLowerCase()])
         console.log(phoneNumber.country)
      } catch (error) {
        if (error instanceof ParseError) {
          // Not a phone number, non-existent country, etc.
          console.log('error', error.message)
        } else {
          throw error
        }
      }
    
    return(
        <div className='card-body' style={{}}> 
            <p className='card-title'>{category.name}</p>
            <p className='card-text'>Address: {category.address}</p>
            <p className='card-text'>Phone: {phoneNumber.formatInternational()}</p>
            <p className='card-text'>{category.note}</p>
        </div>   
    )
}

export default ItineraryCategory