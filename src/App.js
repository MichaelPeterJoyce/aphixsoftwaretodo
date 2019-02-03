import React, { Component } from 'react';
import './App.scss';
import AddToDoItem from "./containers/AddToDoItem/AddToDoItem";
import FilteredToDoItems from "./containers/FilteredToDoItems/FilteredToDoItems";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <h3 className='mt-2'>Todo List Application Demo for Aphix Software</h3>
        <AddToDoItem/>
        <FilteredToDoItems />
      </div>
    );
  }
}

export default App;
