let nextId = 0;
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextId++,
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