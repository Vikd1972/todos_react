import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.inputRecord = this.inputRecord.bind(this);
    this.addRecord = this.addRecord.bind(this);
  }

  render() {
    return (
      <div className="todolist">
        <h3 className="titel">TODO List</h3>
        <form className="addNewNote" onSubmit={this.addRecord}>
          <button className="submitNote">&#10515;</button>
          <input
            className="newNote"
            placeholder="New note"
            onChange={this.inputRecord}
            value={this.state.text}
          />
          <button className="submitNote">+</button>
        </form>
        <TodoList items={this.state.items} />
      </div>
    );
  }

  inputRecord(e) {
    this.setState({ text: e.target.value });
  }

  addRecord(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div className="listNote">
        
        {this.props.items.map((item) => (
          <div className="itemNote" key={item.id}>
            {item.text}
          </div>
        ))}
        
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <TodoApp />
  </div>,
  document.getElementById('root')
);

