import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteDone } from "./Todoslice";
import styles from "./TodoLabel.module.css";

const TodoLabel = (props) => {
  const dispatch = useDispatch();
  
  const DeleteDone = () => {
    dispatch(deleteDone());
  };

  let newItems = [...props.items];
  let quantity_all = newItems.length;
  let quantity_done = 0;
  for (let rec of newItems) {
    if (rec.done) quantity_done += 1;
  }
  let quantity_left = quantity_all - quantity_done;

  return (
    <div className={styles.label}>
      <div onClick={() => props.showAction("all")} className={styles.quantity}>
        All - {quantity_all}
      </div>
      <div onClick={() => props.showAction("done")} className={styles.quantity}>
        Done - {quantity_done}
      </div>
      <div onClick={() => props.showAction("left")} className={styles.quantity}>
        Left - {quantity_left}
      </div>
      <div
        onClick={() => DeleteDone()}
        className={`${styles.quantity} ${styles.clear}`}
      >
        Clear done ({quantity_done})
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

export default connect(mapStateToProps, null)(TodoLabel);
