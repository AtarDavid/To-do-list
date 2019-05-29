import React from 'react';
import Header from './Header';
import Router from './Router';
import { getRandomTagline } from "./helpers";
import uuid from "uuid/v4";

export default class App extends React.Component {
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
      <div className="App">
        <div className="container">
          <Header tagline={getRandomTagline()} />
          <Router addToDo={this.addToDo} items={this.state.toDoItems} />
        </div>
      </div>
    )
  }
}