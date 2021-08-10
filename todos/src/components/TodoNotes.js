import React from "react";
import styles from './TodoNotes.module.css';

class TodoNotes extends React.Component {
  render() {
    let notes = this.props.items.map((note, i) => {
      return (
        <div key={i} className={styles.record}>
          <div className={styles.submit_note}>
            <input
              type="checkbox"
              checked={this.props.items[i].done}
              onChange={() => this.props.changeNote(i)}
            />
          </div>

          <div className={ `${styles.item_note} ${
              this.props.items[i].done ? styles.done_note : ""
            }`}> {note.text}</div>

          <div
            onClick={() => this.props.clickAction(i)}
            className={styles.submit_note }
          >
            -
          </div>
        </div>
      );
    });
    return <div>{notes}</div>;
  }
}

export default TodoNotes;
