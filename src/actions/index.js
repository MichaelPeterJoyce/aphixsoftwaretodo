
let nextId = 0;
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextId++,
    text
});

export const editTodo = text => ({
    type: 'EDIT_TODO',
    text
});