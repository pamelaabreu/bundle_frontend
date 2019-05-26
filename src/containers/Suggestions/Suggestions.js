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
        <>
        <h2>Here's what we recommend taking for your {duration} day trip:</h2>
        <h4>Remove any items you won't need</h4>
        {categories ? (
            <>
            <div className='suggestions-categories my-2'>
            {categories.map(e => {
                return <button key={e.id} onClick={handleCategoryClick(e.name)} className='mx-2 btn border btn-info rounded'>{e.name}</button>;
            })}
            </div>
            </>
        ) : null}
        {}
        <button
            className="btn btn-secondary rounded"
            // onClick={handleBundle}
        >
            Bundle It!
        </button>
        </>
    );
};
