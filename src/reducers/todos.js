import undoable, { distinctState } from 'redux-undo'
const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    status: action.status
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.todo.id ? {...todo, status: !todo.status} : todo
            );
        case 'EDIT_TODO':
            return state.map(todo => {
                if (todo.id === action.todo.id) {
                    todo.text = action.newText
                }
                return todo
            });
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id);
        default:
            return state
    }
};

const undoableTodos = undoable(todos, {
    filter: distinctState()
});

export default undoableTodos