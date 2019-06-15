import React, { Component } from 'react';
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import ToDoFilter from "./ToDoFilter";

export default class Home extends Component {

    render() {
        return (
            <div>
                <ToDoForm />
                <ToDoFilter />
                <ToDoList />
            </div>
        )
    }
}
