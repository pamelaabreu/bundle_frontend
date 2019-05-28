import React, { useEffect, useState } from "react";
import { getSuggestions } from "../../services/suggestions";
import axios from "axios";
import { createTrip } from "../../services/backendCalls";
import "./Suggestions.css";

export default props => {
  const { destination, duration, departureDate, returnDate } = props;

  const [categories, setCategories] = useState(null);
  const [items, setItems] = useState(null);
  const [displayItems, setDisplayItems] = useState(null);
  const [currCategory, setCurrCategory] = useState(null);

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
    if (!currCategory) setDisplayItems(items.clothing);
    else setDisplayItems(items.currCategory);
  }, [items]);

  // useEffect(() => {

  // }, [displayItems])

  const handleCategoryClick = category => e => {
    setCurrCategory(category);
    setDisplayItems(items[category]);
  };

  const handleItemClick = (itemName, i) => e => {
    const currentItem = displayItems[i];
    console.log(currentItem, "curr");
    const newItems = items;
    console.log("before", newItems[currentItem.category][i]);
    newItems[currentItem.category][i].pack = !newItems[currentItem.category][i]
      .pack;
    console.log("after", newItems[currentItem.category][i]);
    console.log("items after", newItems);
    setItems(newItems);
    // setDisplayItems(newItems[currentItem.category])
  };

  const handleBundle = () => {
    console.log(destination, "destin");
    createTrip(destination, departureDate, returnDate)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <h2>Here's what we recommend taking for your {duration} day trip:</h2>
      <h4>Remove any items you won't need</h4>
      {categories ? (
        <>
          <div className="suggestions-categories my-2">
            {categories.map(e => {
              return (
                <button
                  key={e.id}
                  onClick={handleCategoryClick(e.name)}
                  className="mx-2 btn border btn-info rounded"
                >
                  {e.name}
                </button>
              );
            })}
          </div>
        </>
      ) : null}
      <div className="suggestions-items">
        {displayItems
          ? displayItems.map((e, i) => {
              const color = e.pack ? " btn-primary " : " btn-secondary ";
              return (
                <div
                  className={"m-1 btn " + color}
                  key={i}
                  onClick={handleItemClick(e.name, i)}
                >
                  <h6>{e.name}</h6>
                </div>
              );
            })
          : null}
      </div>
      <button
        className="btn btn-secondary rounded"
        // onClick={handleBundle}
      >
        Bundle It!
      </button>
    </>
  );
};
