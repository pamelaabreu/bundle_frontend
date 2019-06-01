import React, { useState, useEffect } from "react";
import axios from "axios";
import NoReminders from "./NoReminders/NoReminders";

export default props => {
  const { lists, updateLists, trip_id } = props;

  const [todoList, setTodoList] = useState(null);
  const [shoppingList, setShoppingList] = useState(null);

  return (
    <>
      <button onClick={createList}>Add</button>
      {lists.length ? <h4>Here's your todos:</h4> : <NoReminders />}
    </>
  );
};
