import React, { Component } from 'react';
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import uuid from "uuid/v4";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toDoItems: {}
        };
    }

    addToDo = text => {
        const todo = {
            uuid: uuid(),
            text: text,
            done: false
        };

        this.setState(state => {
            state.toDoItems[todo.uuid] = todo;
            return state;
        });
    };

    render() {
        return (
            <div>
                <ToDoForm addToDo={this.addToDo} />
                <ToDoList items={this.state.toDoItems} />
            </div>
        )
    }
}
