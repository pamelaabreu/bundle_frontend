import React, { useState } from 'react';
import { getDuration, getSuggestions } from '../../services/suggestions';

export default (props) => {

    return (
        <h1>Here are the items we suggest for your {props.duration} day trip</h1>
    )
}