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

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
