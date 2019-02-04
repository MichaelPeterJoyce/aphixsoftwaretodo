import React, {Component} from 'react';
import './App.scss';
import AddToDoItem from "./containers/AddToDoItem/AddToDoItem";
import FilteredToDoItems from "./containers/FilteredToDoItems/FilteredToDoItems";
import Undo from "./containers/undo";

class App extends Component {
    render() {
        return (
            <div className="App container mt-5">
                <img alt='logo' src={require('./assets/img/logo.png')} className='img-fluid'/>
                <h3>Todo List Application Demo for Aphix Software</h3>
                <AddToDoItem/>
                <Undo/>
                <FilteredToDoItems/>
            </div>
        );
    }
}

export default App;
