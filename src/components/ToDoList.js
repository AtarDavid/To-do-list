import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToDoItem from "./ToDoItem";

class ToDoList extends Component {
    filteredItems = () => {
        const filtered = [];
        const { items, filter } = this.props

        for (const uuid in items) {
            const item = items[uuid];

            if (
                filter === 'all' ||
                (filter === 'done' && item.done === true) ||
                (filter === 'undone' && item.done === false)
            ) {
                filtered.push(item);
            }
        }

        return filtered;
    };

    render() {
        const { items } = this.props;
        return (
            (Object.keys(items).length > 0 &&
                <div className="todo-list">
                    <table className="todo-items table table-borderless">
                        <tbody>
                            {this.filteredItems().map(item => (<ToDoItem
                                key={`todo-item-${item.uuid}`}
                                data={item}
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

export default connect(state => ({
    items: state.toDoItems,
    filter: state.filter,
}))(ToDoList);