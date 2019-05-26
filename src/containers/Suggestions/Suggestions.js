import React, { useEffect, useState } from "react";
import { getSuggestions } from "../../services/suggestions";
import axios from "axios";
import './Suggestions.css';

export default (props) => {

    return (
        <h1>Here are the items we suggest for your {props.duration} day trip</h1>
    )
}