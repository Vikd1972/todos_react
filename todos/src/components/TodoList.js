import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { selectAll } from "./Todoslice";
import TodoNotes from "./TodoNotes";
import TodoForm from "./TodoForm";
import TodoLabel from "./TodoLabel";
import styles from "./Todolist.module.css";

let dones = false;

const TodoList = () => {
  const dispatch = useDispatch();

  //const addItem = (item) => {
  //  this.setState({ items: [...this.state.items, item] });
  //};

  //const changeNote = (newNote, idx) => {
  //  let newItems = [...this.state.items];
  //  for (let note of newItems) {
  //    if (note.dateID === idx) {
  //      note.text = newNote;
  //    }
  //  }
  //  this.setState({ items: newItems });
  //};

  const SelectAll = () => {
    dones = !dones;
    dispatch(selectAll({ dones }));
  };

  return (
    <div className={styles.todolist}>
      <h3 className={styles.titel}>TODO List</h3>

      <div className={styles.todo}>
        <TodoLabel />

        <div className={styles.row}>
          <div className={styles.submit_note}>
            <input
              type="checkbox"
              checked={dones}
              onChange={() => SelectAll()}
            />
          </div>
          <TodoForm />
        </div>

        <TodoNotes />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

export default connect(mapStateToProps, null)(TodoList);
