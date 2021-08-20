import React, { useState } from "react";
import { selectNote, deleteNote, changeNote } from "./Todoslice";
import { useDispatch } from "react-redux";
import styles from "./TodoNotes.module.css";

const TodoRow = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const [newvalue, setNewvalue] = useState("changeTask");
  const {note: newItem} = props;

  const change = (text, id) => {
    setIsEdit(!isEdit);
    setNewvalue(text);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (newvalue) {
      dispatch(changeNote({ text: newvalue, dateID: newItem.dateID }));
    }
    setIsEdit(!isEdit);
  };


  const onInputChange = () => {
    dispatch(selectNote({ dateID: newItem.dateID }))
  }

  const noteRow = () => {
    return (
      <div className={styles.record}>
        <div className={styles.submit_note}>
          <input
            type="checkbox"
            checked={newItem.done}
            onChange={onInputChange}
          />
        </div>

        <div
          onClick={() => change(newItem.text, newItem.dateID)}
          className={`${styles.item_note} 
            ${newItem.done ? styles.done_note : ""}`}
        >
          {isEdit ? (
            <form onSubmit={onSubmit}>
              <input
                id="input"
                className={styles.change_form}
                type="text"
                autoFocus
                value={newvalue}
                onChange={(event) => setNewvalue(event.target.value)}
              />
            </form>
          ) : (
            <div>{newItem.text}</div>
          )}
        </div>

        <div
          onClick={() => dispatch(deleteNote({ dateID: newItem.dateID }))}
          className={styles.submit_note}
        >
          -
        </div>
      </div>
    );
  };

  return <div>{noteRow()}</div>;
};

export default TodoRow;
