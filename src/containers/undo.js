import React from 'react'

import {ActionCreators as UndoActionCreators} from 'redux-undo'
import {connect} from 'react-redux'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

let Undo = ({canUndo, canRedo, onUndo, onRedo}) => (
    <div className='mt-3 mb-3'>
        <button className='btn btn-primary btn-sm mr-2' onClick={onUndo} disabled={!canUndo}>
            <FontAwesomeIcon icon={['fa', 'undo']} />
        </button>
        <button className='btn btn-warning btn-sm' onClick={onRedo} disabled={!canRedo}>
            <FontAwesomeIcon icon={['fa', 'redo']} />
        </button>
    </div>
);

const mapStateToProps = state => {
    return {
        canUndo: state.todos.past.length > 0,
        canRedo: state.todos.future.length > 0
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onUndo: () => dispatch(UndoActionCreators.undo()),
        onRedo: () => dispatch(UndoActionCreators.redo())
    }
};

Undo = connect(
    mapStateToProps,
    mapDispatchToProps
)(Undo);

export default Undo

