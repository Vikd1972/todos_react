import React from "react";
import styles from "./TodoNotes.module.css";

class TodoNotes extends React.Component {
  render() {
    let newItems = [];
    let newNotes = this.props.show;

    switch (newNotes) {
      case "all":
        newItems = this.props.items;
        break;

      case "done":
        for (let rec of this.props.items) {
          if (rec.done) newItems.push(rec);
        }
        break;

      case "left":
        for (let rec of this.props.items) {
          if (!rec.done) newItems.push(rec);
        }
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
