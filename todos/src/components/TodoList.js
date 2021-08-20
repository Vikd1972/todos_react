import React, { useState } from "react";
//import { connect } from "react-redux";
import { useDispatch } from "react-redux";

import { selectAll } from "./Todoslice";

import styles from "./Todolist.module.css";

import TodoNotes from "./TodoNotes";
import TodoForm from "./TodoForm";
import TodoLabel from "./TodoLabel";

const TodoList = () => {
  const dispatch = useDispatch();
  const [dones, setDones] = useState(true);
  const selectAllNotes = () => {
    
    dispatch(selectAll({ dones }));
    setDones(!dones);
  };

  return (
    <div className={styles.todolist}>
      <h3 className={styles.titel}>TODO List</h3>

      <div className={styles.todo}>
        <TodoLabel />

        <div className={styles.row}>
          <div className={styles.submit_note}>
            <input type="checkbox" checked={!dones} onChange={selectAllNotes} />
          </div>
          <TodoForm />
        </div>

        <TodoNotes />
      </div>
    </div>
  );
};

export default TodoList;
