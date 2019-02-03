import TodoList from "../../components/TodoList";
import {connect} from "react-redux";
import {deleteTodo, toggleTodo} from "../../actions";

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    deleteTodo: id => dispatch(deleteTodo(id)),
    toggleTodo: id => dispatch(toggleTodo(id))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)