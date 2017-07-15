import React from 'react';
import {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';
import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter} from 'react-router-redux'
import About from "./components/About";
import {Route} from 'react-router';


/**
 * StyleSheet
 */
import './index.scss';

const history = createHistory();
const store = configureStore(history);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/about" component={About}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
