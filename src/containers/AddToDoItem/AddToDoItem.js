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
                className='form-group col-6'
                onSubmit={e => AddToDoItem(e)}>
                <label>Todo Item</label>
                <input className='form-control' ref={node => (input = node)}/>
                <br />
                <button className='btn  btn-sm btn-primary mt-2' type="submit">Add Todo</button>
            </form>
        </div>
    );
};

export default connect()(AddToDoItem)