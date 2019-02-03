import React from 'react';

const Todo = ({todo}) => {
    todo.disabled = true;
    let toggleTodoStatus = (todo) => {
        todo.disabled = false;
    };
    return (
        <li className="list-group-item">
            <span className="badge badge-primary float-left mb-2">Status: Todo</span>
            <div className="input-group input-group-sm">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Todo Text</span>
                </div>
                <input type="text" className="form-control" disabled={todo.disabled} value={todo.text} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                <div className="input-group-append">
                    <button className="btn btn-warning" onClick={toggleTodoStatus(todo)} type="button">Edit</button>
                </div>
            </div>
            <button className="mt-3 btn btn-danger btn-sm float-left" type="button">Delete</button>
            <button className="mt-3 btn btn-success btn-sm float-right" type="button">Complete</button>
        </li>
    );
};

export default Todo;