import React from "react";

export default class ToDoItem extends React.Component {
    render() {
        return (
            <div className="todo-item">
                {this.props.data.uuid} | {this.props.data.text}
            </div>
        );
    }
}