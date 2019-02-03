const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                }
            ];
        case 'EDIT_TODO':
            return state.map(todo =>
                todo.id === action.id ? todo.text = action.text : todo
            );
        default:
            return state
    }
};

export default todos