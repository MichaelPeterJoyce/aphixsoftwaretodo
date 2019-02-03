import React, { Component } from 'react';
import './App.scss';
import AddToDoItem from "./containers/AddToDoItem";
import FilteredToDoItems from "./containers/FilteredToDoItems";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Todo List Application Demo for Aphix Software</h2>
        <AddToDoItem/>
        <FilteredToDoItems />
      </div>
    );
  }
}

export default App;
