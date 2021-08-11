import React from "react";
import TodoNotes from "./TodoNotes";
import TodoForm from "./TodoForm";
import TodoLabel from "./TodoLabel";

import styles from "./Todolist.module.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      dones: false,
      show: "all",
    };
  }

  addItem = (item) => {
    let newItems = this.state.items;
    this.setState({ items: [...newItems, item] });
  };

  showList = (newShow) => {
    this.setState({ show: newShow });
  };

  changeNote = (idx) => {
    //let newItems = [...this.state.items];




     // this.setState({ task: e.target.value });
  }

  deleteItem = (idx) => {
    let newItems = [...this.state.items];
    let id = newItems.findIndex((findID) => findID.dateID === idx);
    newItems.splice(id, 1);
    this.setState({ items: newItems });
  };

  selectNote = (idx) => {
    let newItems = [...this.state.items];
    for (let note of newItems) {
      if (note.dateID === idx) {
        note.done = !note.done;
      }
    }
    this.setState({ items: newItems });
  };

  selectAll = () => {
    let newItems = [...this.state.items];
    for (let rec of newItems) {
      rec.done = !this.state.dones;
    }
    this.setState({ items: newItems });
    this.setState({ dones: !this.state.dones });
  };
  clearDone = () => {
    let newItems = this.state.items.filter((item) => !item.done);
    this.setState({ items: newItems });
  }

  render() {
    return (
      <div className={styles.todolist}>
        <h3 className={styles.titel}>TODO List</h3>

        <TodoLabel
          items={this.state.items}
          showAction={this.showList}
          clearDone={this.clearDone}
        />

        <div className={styles.row}>
          <div className={styles.submit_note}>
            <input
              type="checkbox"
              checked={this.state.dones}
              onChange={this.selectAll}
            />
          </div>

          <TodoForm submitAction={this.addItem} />
        </div>

        <TodoNotes
          items={this.state.items}
          show={this.state.show}
          clickAction={this.deleteItem}
          selectNote={this.selectNote}
          changeNote={this.changeNote}
        />
      </div>
    );
  }
}

export default TodoList;
