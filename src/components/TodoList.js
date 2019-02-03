import React from 'react';
import Todo from "./Todo/Todo";

const TodoList = ({todos, deleteTodo, toggleTodo, editTodo}) => {
    return (
        <div>
            <ul className="list-group">
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;