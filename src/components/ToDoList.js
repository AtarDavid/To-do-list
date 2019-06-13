import React, { Component } from 'react';
import ToDoItem from "./ToDoItem";

export default class ToDoList extends Component {
    render() {
        const { items, updateToDoText, toggleToDoDone
            , removeToDo } = this.props;
        return (
            (Object.keys(items).length > 0 &&
                <div className="todo-list">
                    <table className="todo-items table table-borderless">
                        <tbody>
                            {Object.keys(items).map(uuid => (
                                <ToDoItem
                                    key={`todo-item-${uuid}`}
                                    data={items[uuid]}
                                    updateToDoText={updateToDoText}
                                    toggleToDoDone={toggleToDoDone}
                                    removeToDo={removeToDo}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>)
            ||
            <div className="alert alert-info">
                Start by adding a new item
      </div>
        )
    }
}
