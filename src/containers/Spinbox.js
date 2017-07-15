import React from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from "../actions/Spinbox";
import {push} from "react-router-redux";

class Spinbox extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.increment}>up</button>
                <input type="text" value={this.props.value}/>
                <button onClick={this.props.decrement}>down</button>
                <button onClick={this.props.goto}>goToAbout</button>
            </div>
        )

    }
}

const mapStateToProps = (state) => ({
    value: state.spinbox
})

const mapDispatchToProps = (dispatch) => ({
    increment: () => {
        dispatch(increment(1));
    },

    goto: () => {
        dispatch(push('/about'));
    },
    decrement: () => {
        dispatch(decrement(1));
    }
})


Spinbox = connect(mapStateToProps, mapDispatchToProps)(Spinbox);

export default Spinbox;