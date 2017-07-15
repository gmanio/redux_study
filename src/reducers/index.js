import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import spinbox from "./spinbox";

const todoApp = combineReducers({
    // todos,
    // visibilityFilter
    spinbox
})

export default todoApp
