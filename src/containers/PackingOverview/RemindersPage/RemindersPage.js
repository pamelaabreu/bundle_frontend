import React, { useState, useEffect } from "react";
import axios from "axios";
import NoReminders from "./NoReminders/NoReminders";

export default props => {
  const { lists, updateLists, trip_id } = props;

  const [todoList, setTodoList] = useState(null);
  const [shoppingList, setShoppingList] = useState(null);

  const getList = list => {
    axios({
      method: "get",
      url: "http://localhost:5000/todolist/" + list.todolist_id + "/all"
    })
      .then(({ data: listData }) => {
        if (list.list_type === "Shopping List") setShoppingList(listData);
        else setTodoList(listData);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <button onClick={createList}>Add</button>
      {lists.length ? <h4>Here's your todos:</h4> : <NoReminders />}
    </>
  );
};
