import {createStore, applyMiddleware, combineReducers} from 'redux';
import reducers from '../reducers';
import {routerMiddleware, routerReducer} from 'react-router-redux';
// import spinbox from "../reducers/spinbox";

export default function configureStore(history) {
    return createStore(
        combineReducers({
            ...reducers,
            router: routerReducer
        }),
        // rootReducer,
        chromeDevTools(),
        // applyMiddleware(thunk),
        applyMiddleware(routerMiddleware(history))
        // applyMiddleware(middleware)
    );
}

const chromeDevTools = () => window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); // For chrome redux timeline debugging
