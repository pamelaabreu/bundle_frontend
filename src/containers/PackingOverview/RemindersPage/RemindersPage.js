import React, { useState, useEffect } from "react";
import axios from "axios";
import NoReminders from "./NoReminders/NoReminders";
import AddListButton from "./AddListButton/AddListButton";

const RemindersPage = props => {
  const { lists, updateLists, trip_id, selectedList, handleSelectList } = props;

  const [todoList, setTodoList] = useState(null);
  const [shoppingList, setShoppingList] = useState(null);

  useEffect(() => {
    if (!lists.length) return;
    for (let list of lists) {
      getList(list);
    }
  }, [lists]);

  const createList = () => {
    axios({
      method: "post",
      url: "http://localhost:5000/todolist/",
      data: {
        name: "",
        trip_id,
        list_type: "Todos"
      }
    })
      .then(res => {
        console.log("list created");
        updateLists();
      })
      .catch(err => {
        console.log(err);
      });
  };

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
      <AddListButton
        createList={createList}
        handleSelectList={handleSelectList}
      />
      {lists.length ? <h4>Here's your todos:</h4> : <NoReminders />}
    </>
  );
};

export default RemindersPage;
