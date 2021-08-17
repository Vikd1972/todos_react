import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./Todoslice";

import styles from "./Todoform.module.css";


const TodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (value) {
      dispatch(
        addTodo({
          text: value,
        })
      );
    }
  };

  return (
    <form onSubmit={onSubmit} className={styles.add_new_note}>
      <input
        type="text"
        className={styles.new_note}
        placeholder="Enter task"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <button type="submit" className={styles.submit_note}>
       +
      </button>
    </form>
  );
};

export default TodoForm;
