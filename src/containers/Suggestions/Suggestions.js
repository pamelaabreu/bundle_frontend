import React, { useEffect, useState } from "react";
import { getSuggestions } from "../../services/suggestions";
import axios from "axios";
import './Suggestions.css';

export default props => {
    const { duration } = props;

    const [categories, setCategories] = useState(null);
    const [items, setItems] = useState(null);
    const [displayItems, setDisplayItems] = useState(null);

    useEffect(() => {
        const allTheItems = getSuggestions(duration);
        setItems(allTheItems);

        axios({
        method: "get",
        url: "http://localhost:5000/categories/all"
        })
        .then(res => {
            setCategories(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    useEffect(() => {
        if (!items) return;
        setDisplayItems(items.clothing)
    }, [items])

    const handleCategoryClick = category => e => {
        setDisplayItems(items[category])
        console.log(displayItems);
    }

  // const handleBundle = () => {
  //     axios({
  //     method: "post",
  //     url: "http://localhost:5000/trip",
  //     data: {
  //         name: "",
  //         city: "",
  //         country: "",
  //         departure_date: "",
  //         return_date: ""
  //     }
  //     })
  //     .then(res => {
  //         console.log(res);
  //     })
  //     .catch(err => {
  //         console.log(err);
  //     });
  // };

    return (
        <h1>Here are the items we suggest for your {props.duration} day trip</h1>
    )
}