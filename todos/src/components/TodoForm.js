import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
  }

  updateText = (e) => {
    this.setState({ task: e.target.value });
  };

  submitForm = (e) => {
    e.preventDefault();
    if (this.state.task.length === 0) {
      return;
    }

      this.props.submitAction({
          text: this.state.task,
          done: false
    });
    this.setState({ task: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitForm} className="addNewNote">
        <input
          type="text"
          className="newNote"
          placeholder="Enter task"
          onChange={this.updateText}
          value={this.state.task}
        />
        <button className="submitNote">+</button>
      </form>
    );
  }
}

export default TodoForm;
