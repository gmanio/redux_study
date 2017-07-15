import React from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from "../actions/Spinbox";

let Spinbox = ({value, increment, decrement}) => {
    return (
        <div>
            <button onClick={increment}>up</button>
            <input type="text" value={value}/>
            <button onClick={decrement}>down</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    value: state.spinbox
})

const mapDispatchToProps = (dispatch) => ({
    increment: () => {
        dispatch(increment(1));
    },
    decrement: () => {
        dispatch(decrement(1));
    }
})


Spinbox = connect(mapStateToProps, mapDispatchToProps)(Spinbox);

export default Spinbox;