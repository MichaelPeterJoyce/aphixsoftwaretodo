import React from 'react';
import Todo from "./Todo/Todo";

const TodoList = ({todos, deleteTodo, toggleTodo}) => {
    return (
        <div>
            <ul className="list-group">
                {todos.map(todo => (
                    <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;