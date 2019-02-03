import React from 'react';
import Todo from "./Todo/Todo";

const TodoList = ({todos}) => {
    return (
        <div>
            <ul className="list-group">
                {todos.map(todo => (
                    <Todo key={todo.id} todo={todo}/>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;