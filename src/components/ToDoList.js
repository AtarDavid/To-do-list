import React, { Component } from 'react';
import ToDoItem from "./ToDoItem";

export default class ToDoList extends Component {
    render() {
        console.log(Object.keys(this.props.items).length)
        return (
            (Object.keys(this.props.items).length > 0 &&
                <div className="todo-list">
                    <ul className="todo-items">
                        {Object.keys(this.props.items).map(uuid => (
                            <ToDoItem key={`todo-item-${uuid}`} data={this.props.items[uuid]} />
                        ))}
                    </ul>
                </div>)
            ||
            <div className="alert alert-info">
                Start by adding a new item
      </div>
        )
    }
}
