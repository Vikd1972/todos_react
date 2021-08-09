import React from "react";

class TodoNotes extends React.Component {
  render() {
    
    let notes = this.props.items.map((note, i) => {
      return (
        <div key={i} className="record">
          <div className="submitNote sub">
            <input
              type="checkbox"
              checked={this.props.items[i].done}
              onChange={() => this.props.changeNote(i)}
            />
          </div>

          <div className="itemNote">{note.text}</div>

          <div
            onClick={() => this.props.clickAction(i)}
            className="submitNote sub"
          >
            -
          </div>
        </div>
      );
    });
    return <div>{notes}</div>;
  }
}

export default TodoNotes;
