import React from "react";
import styles from "./TodoNotes.module.css";

class TodoNotes extends React.Component {
  changeNote = (idx) => {
    this.props.changeStyle();
    let newItems = [...this.props.items];
    for (let note of newItems) {
      if (note.dateID === idx) {
        this.props.changeNote(note.text, note.dateID);
      }
    }
  };

  render() {
    let newItems = [];

    switch (this.props.show) {
      case "all":
        newItems = this.props.items;
        break;

      case "done":
        newItems = this.props.items.filter((item) => item.done);
        break;

      case "left":
        newItems = this.props.items.filter((item) => !item.done);
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
              onChange={() => this.props.selectNote(note.dateID)}
            />
          </div>

          <div
            onClick={() => this.changeNote(note.dateID)}
            className={`${styles.item_note} ${
              note.done ? styles.done_note : ""
            }`}
          >
            {note.text}
          </div>

          <div
            onClick={() => this.props.clickAction(note.dateID)}
            className={styles.submit_note}
          >
            x
          </div>
        </div>
      );
    });
    return <div>{notes}</div>;
  }
}

export default TodoNotes;
