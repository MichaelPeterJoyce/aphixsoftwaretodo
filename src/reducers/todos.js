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
                todo.id === action.id ? { ...todo, status: !todo.status } : todo
            )
        case 'EDIT_TODO':
            return state.map(todo =>
                todo.id === action.id ? todo.text = action.text : todo
            );
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id);
        default:
            return state
    }
};

export default todos