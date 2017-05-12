import React from 'react'
import ReactDOM from 'react-dom'
import reducer from './reducers/index.jsx'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {Router, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import routers from './routers.jsx'


const store = createStore(reducer, applyMiddleware(thunk));
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routers}/>
    </Provider>,
    document.getElementById('root')
);
