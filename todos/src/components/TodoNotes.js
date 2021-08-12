import React from "react";
import styles from "./TodoNotes.module.css";

class TodoNotes extends React.Component {
  state = {
    style: "hide",
    changeTask: "",
    changeID: "",
  };

  changeNote = (idx) => {
    this.setState({ style: "block" });
    let newItems = [...this.props.items];
    for (let note of newItems) {
      if (note.dateID === idx) {
        this.setState({ changeTask: note.text, changeID: note.dateID });
      }
    }
  };

  updateText = (e) => {
    this.setState({ changeTask: e.target.value });
  };

  submitTask = (e) => {
    e.preventDefault();
    if (this.state.changeTask === "") {
      this.props.clickAction(this.state.changeID);
      return;
    }
    this.props.changeNote(this.state.changeTask, this.state.changeID);
    this.setState({ style: "hide" });
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
            className={`${styles.item_note} 
            ${note.done ? styles.done_note : ""}`}
          >
            
             {this.state.style === "block" ? (
              this.state.changeID === note.dateID ? (
                <form onSubmit={this.submitTask}>
                  <input
                    className={styles.change_form}
                    type="text"
                    onChange={this.updateText}
                    value={this.state.changeTask}
                  />
                </form>
              ) : (
                <div>{note.text}</div>
              )) : (<div>{note.text}</div>)}
          
            </div>

          <div
            onClick={() => this.props.clickAction(note.dateID)}
            className={styles.submit_note}
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
