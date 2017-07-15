import React from 'react';
import {Route} from 'react-router';
import App from "./components/App";
import About from "./components/About";


export default (
    <div>
        <Route exact path="/" component={App}/>
        <Route path="/about" component={About}/>
    </div>
);