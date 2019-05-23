import React from "react";
import "./CreateTripForm.css";


export default props => {
    return (
        <div className="create-trip-form">
            <form className="">
                <div className="form-group">
                    <label htmlFor="destination" className="trip-form-label">Enter your destination:</label>
                    <input type="text" name="destination" placeholder="City, Country" />
                </div>
                <div className='form-button-container'>
                    <button className='form-button' type='submit'>Next</button>
                </div>
            </form>
        </div>
    );
};

