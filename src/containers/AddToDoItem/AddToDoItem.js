import React from 'react';
import {connect} from "react-redux";
import {addTodo} from "../../actions";
import './AddToDoItem.scss';

const AddToDoItem = ({dispatch}) => {
    let input;
    let AddToDoItem = (e) => {
        e.preventDefault();
        if (!input.value.trim()) {
            return
        }
        dispatch(addTodo(input.value));
        input.value = ''
    };
    return (
        <div className={'AddToDoItem'}>
            <form
                onSubmit={e => AddToDoItem(e)}>
                <input ref={node => (input = node)}/>
                <br />
                <button className='btn  btn-sm btn-primary mt-2' type="submit">Add Todo</button>
            </form>
        </div>
    );
};

export default connect()(AddToDoItem)