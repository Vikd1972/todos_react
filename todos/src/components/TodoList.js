import React from "react";
import TodoNotes from "./TodoNotes";
import TodoForm from "./TodoForm";
import styles from "./Todolist.module.css"

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
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

  selectAll = (checked) => {
    console.log(checked);
    //let newItems = [...this.state.items];
    //newItems.forEach(() => { newItems.done = checked });
    //  console.log(checked);
    //this.setState({ items: newItems });
  };

  render() {
    let checked;

    return (
      <div className={styles.todolist}>
        <h3 className={styles.titel}>TODO List</h3>
        <div className={styles.row}>
          <div className={styles.submit_note} onClick={this.selectAll(checked)}>
            <input
              type="checkbox"
              size="large"
              
              //onChange={this.selectAll(checked)}
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
