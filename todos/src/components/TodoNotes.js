import React from "react";
import { connect } from "react-redux";
import { selectNote, deleteNote } from "./Todoslice";
import { useDispatch } from "react-redux";
import styles from "./TodoNotes.module.css";

const TodoNotes = (props) => {
  let style = "hide";
  let changeTask = "";
  let changeID = "";
  const dispatch = useDispatch();

  const SelectNote = (dateID) => {
    dispatch(selectNote({ dateID }));
  };

  const DeleteNote = (dateID) => {
    dispatch(deleteNote({ dateID }));
  };

  const changeNote = (idx) => {
    style = "block";
    let newItems = [...props.items];
    for (let note of newItems) {
      if (note.dateID === idx) {
        changeTask = note.text;
        changeID = note.dateID;
      }
    }
  };

  const updateText = (e) => {
    changeTask = e.target.value;
  };
  const submitTask = (e) => {
    e.preventDefault();
    if (changeTask === "") {
      this.props.clickAction(changeID);
      return;
    }
    props.changeNote(changeTask, changeID);
    this.setState({ style: "hide" });
  };

  let newItems = [];

  switch (props.show) {
    case "all":
      newItems = props.items;
      break;

    case "done":
      newItems = props.items.filter((item) => item.done);
      break;

    case "left":
      newItems = props.items.filter((item) => !item.done);
      break;
    default:
  }

  let notes = newItems.map((note) => {
    return (
      <div key={note.dateID} className={styles.record}>
        <div className={styles.submit_note}>
          <input
            type="checkbox"
            checked={note.done}
            onChange={() => SelectNote(note.dateID)}
          />
        </div>

        <div
          onClick={() => changeNote(note.dateID)}
          className={`${styles.item_note} 
            ${note.done ? styles.done_note : ""}`}
        >
          {style === "block" ? (
            changeID === note.dateID ? (
              <form onSubmit={() => submitTask}>
                <input
                  className={styles.change_form}
                  type="text"
                  onChange={() => updateText}
                  value={changeTask}
                />
              </form>
            ) : (
              <div>{note.text}</div>
            )
          ) : (
            <div>{note.text}</div>
          )}
        </div>

        <div
          onClick={() => DeleteNote(note.dateID)}
          className={styles.submit_note}
        >
          -
        </div>
      </div>
    );
  });
  return <div>{notes}</div>;
};

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

export default connect(mapStateToProps, null)(TodoNotes);
