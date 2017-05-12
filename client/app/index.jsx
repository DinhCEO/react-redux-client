import React from 'react'
import ReactDOM from 'react-dom'
import reducer from './reducers/index.jsx'
import {createStore} from 'redux'
import {Router, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import routers from './routers.jsx'


const store = createStore(reducer);
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routers}/>
    </Provider>,
    document.getElementById('root')
);
