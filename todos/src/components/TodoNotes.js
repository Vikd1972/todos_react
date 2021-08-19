import React from "react";
import { useSelector } from "react-redux";
import { getShowNotes } from "../store/selector";
import TodoRow from "./TodoRow";
import styles from "./TodoNotes.module.css";

const TodoNotes = () => {
  const notes = useSelector(getShowNotes);

  let noteList = notes.map((note) => {
    return (
      <div key={note.dateID} className={styles.record}>
        <TodoRow note={note} />
      </div>
    );
  });

  return <div>{noteList}</div>;
};

export default TodoNotes;
