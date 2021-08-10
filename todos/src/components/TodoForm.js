import React from "react";
import styles from "./Todoform.module.css";

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
      <form onSubmit={this.submitForm} className={styles.add_new_note}>
        <input
          type="text"
          className={styles.new_note}
          placeholder="Enter task"
          onChange={this.updateText}
          value={this.state.task}
        />
        <button className={styles.submit_note}>+</button>
      </form>
    );
  }
}

export default TodoForm;
