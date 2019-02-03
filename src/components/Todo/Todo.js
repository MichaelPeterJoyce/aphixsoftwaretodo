import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Todo extends Component {
    toggleTodoStatus = () => {
       this.props.toggleTodo(this.props.todo)
    };
    deleteTodoItem = () => {
       this.props.deleteTodo(this.props.todo)
    };

    editTodo = (event) => {
        this.props.editTodo(this.props.todo, event.target.value);
    };
    render() {
        return (
            <li className="list-group-item">
                <span className={"badge float-left mb-2 " + (this.props.todo.status ? "badge-primary" : "badge-success")}>Status: {this.props.todo.status ? 'Todo': 'Complete'}</span>
                <div className="input-group input-group-sm">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Todo Text</span>
                    </div>
                    <input type="text" className="form-control"
                           onChange={(event)=>this.editTodo(event)}
                           value={this.props.todo.text}
                           aria-label="Small"
                           aria-describedby="inputGroup-sizing-sm"
                    />
                </div>
                <button className="mt-3 btn btn-danger btn-sm float-left" onClick={this.deleteTodoItem} type="button">Delete</button>
                <button className="mt-3 btn btn-success btn-sm float-right" onClick={this.toggleTodoStatus} type="button">Complete</button>
            </li>
        );
    }
};

Todo.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        status: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired,
    deleteTodo: PropTypes.func.isRequired
};

export default Todo;

