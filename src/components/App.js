import React from 'react';
import Header from './Header';
import ToDoList from './ToDoList';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
