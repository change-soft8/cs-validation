window.jQuery = require('jquery');
require('bootstrap-webpack');

import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, hashHistory} from 'react-router';
import App from './app';

var HelloMessage = React.createClass({
    render: function() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                </Route>
            </Router>
        );
    }
});

// 加载组件到 DOM 元素 mountNode
ReactDOM.render(<HelloMessage />, document.getElementById('container'));