import React from 'react';

const Todo = ({todo}) => {
    return (
        <li className="list-group-item">
            {todo.text}
        </li>
    );
};

export default Todo;