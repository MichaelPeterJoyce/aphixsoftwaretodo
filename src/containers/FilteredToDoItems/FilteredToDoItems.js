import TodoList from "../../components/TodoList";
import {connect} from "react-redux";
import {deleteTodo, editTodo, toggleTodo} from "../../actions";

const mapStateToProps = state => ({
    todos: state.todos.present
});

const mapDispatchToProps = dispatch => ({
    deleteTodo: id => dispatch(deleteTodo(id)),
    toggleTodo: id => dispatch(toggleTodo(id)),
    editTodo: (todo, newText) => dispatch(editTodo(todo, newText))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)