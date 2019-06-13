import React, { Component } from 'react';
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import uuid from "uuid/v4";
import Storage from "../modules/Storage"

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.storageKey = 'react-todo';
        const old = Storage.get(this.storageKey);

        if (old) {
            this.state = JSON.parse(old);
        } else {
            this.state = {
                toDoItems: {}
            };
            Storage.set(this.storageKey, JSON.stringify(this.state));
        }
    }

    componentDidUpdate() {
        Storage.set(this.storageKey, JSON.stringify(this.state));
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

    updateToDoText = (uuid, text) => {
        this.setState(state => {
            state.toDoItems[uuid].text = text;
            return state;
        });
    };

    toggleToDoDone = event => {
        const checkbox = event.target;

        this.setState(state => {
            state.toDoItems[checkbox.value].done = checkbox.checked;
            return state;
        });
    };

    removeToDo = uuid => {
        this.setState(state => {
            delete state.toDoItems[uuid];
            return state;
        });
    };

    render() {
        return (
            <div>
                <ToDoForm addToDo={this.addToDo} />
                <ToDoList
                    items={this.state.toDoItems}
                    updateToDoText={this.updateToDoText}
                    toggleToDoDone={this.toggleToDoDone}
                    removeToDo={this.removeToDo}
                />
            </div>
        )
    }
}
