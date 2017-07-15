import React from 'react';
import {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';

/**
 * StyleSheet
 */
import './index.scss';

const store = configureStore();

// 원하는 상태로 유지하기 위해 SET_STATE 디스패치
store.dispatch({
    type: 'SET_STATE',
    state: {
        spinboxValue: 0,
        todos: [
            {id: 1, text: 'React', status: 'active', editing: false},
            {id: 2, text: 'Redux', status: 'active', editing: false},
            {id: 3, text: 'Immutable', status: 'active', editing: false},
        ],
        filter: 'all'
    }
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
