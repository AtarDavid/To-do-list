import React, { Component } from 'react';
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

export default class Home extends Component {
    render() {
        return (
            <div>
                <ToDoForm addToDo={this.props.addToDo} />
                <ToDoList items={this.props.items} />
            </div>
        )
    }
}
