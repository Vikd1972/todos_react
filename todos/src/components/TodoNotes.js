import React from "react";
import styles from "./TodoNotes.module.css";

class TodoNotes extends React.Component {
  render() {
    // let newItems = this.props.items;
    let newItems = [];
    let newNotes = "left";
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
        console.log('????');
    }
    let notes = newItems.map((note, i) => {
      return (
        <div key={note.dataID} className={styles.record}>
          <div className={styles.submit_note}>
            <input
              type="checkbox"
              checked={this.props.items[i].done}
              onChange={() => this.props.selectNote(i)}
            />
          </div>

          <div
            className={`${styles.item_note} ${
              this.props.items[i].done ? styles.done_note : ""
            }`}
          >          
            {note.text}
          </div>

          <div
            onClick={() => this.props.clickAction(i)}
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
