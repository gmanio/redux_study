import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore() {
    return createStore(
        rootReducer,
        chromeDevTools(),
        applyMiddleware(thunk)
    );
}

const chromeDevTools = () => window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); // For chrome redux timeline debugging
