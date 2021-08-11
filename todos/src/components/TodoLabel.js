import React from "react";
import styles from "./TodoLabel.module.css";

class TodoLabel extends React.Component {
  showList = (filter) => {
    this.props.showAction(filter);
  };

  render() {
    let newItems = [...this.props.items];
    let quantity_all = newItems.length;
    let quantity_done = 0;
    for (let rec of newItems) {
      if (rec.done) quantity_done += 1;
    }
    let quantity_left = quantity_all - quantity_done;

    return (
      <div className={styles.label}>
        <div onClick={() => this.showList("all")} className={styles.quantity}>
          All - {quantity_all}
        </div>
        <div onClick={() => this.showList("done")} className={styles.quantity}>
          Done - {quantity_done}
        </div>
        <div onClick={() => this.showList("left")} className={styles.quantity}>
          Left - {quantity_left}
        </div>
        <div
          onClick={() => this.props.clearDone()}
          className={`${styles.quantity} ${styles.clear}`}
        >
          Clear done ({quantity_done})
        </div>
      </div>
    );
  }
}

export default TodoLabel;
