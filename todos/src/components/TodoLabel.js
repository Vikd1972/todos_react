import React, {useMemo} from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteDone, showFilter } from "./Todoslice";
import styles from "./TodoLabel.module.css";

const TodoLabel = (props) => {
  const dispatch = useDispatch();
 
  const { quantity_left, quantity_all, quantity_done } = useMemo(() => {
    
    const newItems = props.items.notes;
    const quantity_all = newItems.length;
    let quantity_done = 0;
    for (let rec of newItems) {
      if (rec.done) quantity_done += 1;
    }
    const quantity_left = quantity_all - quantity_done;
    
    return {
      quantity_left,
      quantity_all,
      quantity_done,
    };
  }, [props.items.notes]);


  return (
    <div className={styles.label}>
      <div
        onClick={() => dispatch(showFilter("ALL"))}
        className={styles.quantity}
      >
        All - {quantity_all}
      </div>
      <div
        onClick={() => dispatch(showFilter("DONE"))}
        className={styles.quantity}
      >
        Done - {quantity_done}
      </div>
      <div
        onClick={() => dispatch(showFilter("LEFT"))}
        className={styles.quantity}
      >
        Left - {quantity_left}
      </div>
      <div
        onClick={() => dispatch(deleteDone())}
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
