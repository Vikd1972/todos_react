import React from "react";
import TodoNotes from "./TodoNotes";
import TodoForm from "./TodoForm";

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
    let newItems = [...this.state.items];
    newItems.forEach(() => { newItems.done = checked });
       console.log(checked);
    this.setState({ items: newItems });
  };

  render() {
    let checked = false;
    
    return (
      <div className="todolist">
        <h3 className="titel">TODO List</h3>
        <div className="row">
          <div className="submitNote" onClick={this.selectAll(checked)}>
            <input
              type="checkbox"
              bsSize="large"
              checked
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
