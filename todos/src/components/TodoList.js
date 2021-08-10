import React from "react";
import TodoNotes from "./TodoNotes";
import TodoForm from "./TodoForm";
import styles from "./Todolist.module.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      dones: false,
    };
  }

  addItem = (item) => {
    let newItems = this.state.items;
    this.setState({ items: [...newItems, item] });
  };

  deleteItem = (idx) => {
    let newItems = [...this.state.items];
    newItems.splice(idx, 1);
    this.setState({ items: newItems });
  };

  changeNote = (idx) => {
    let newItems = [...this.state.items];
    newItems[idx].done = !newItems[idx].done;
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

  render() {
    return (
      <div className={styles.todolist}>
        <h3 className={styles.titel}>TODO List</h3>
        <div className={styles.row}>
          <div className={styles.submit_note}>
            <input
              type="checkbox"
              size="large"
              checked={this.state.dones}
              onChange={this.selectAll}
            />
          </div>

          <TodoForm submitAction={this.addItem} />
        </div>

        <TodoNotes
          items={this.state.items}
          clickAction={this.deleteItem}
          changeNote={this.changeNote}
        />
      </div>
    );
  }
}

export default TodoList;
