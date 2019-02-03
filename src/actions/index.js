import {v4} from 'node-uuid';
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: v4(),
    text,
    status: true
});

export const editTodo = (todo, newText) => ({
    type: 'EDIT_TODO',
    todo: todo,
    newText: newText
});

export const toggleTodo = todo => ({
    type: 'TOGGLE_TODO',
    todo: todo
});

export const deleteTodo = todo => ({
    type: 'DELETE_TODO',
    id: todo.id
});