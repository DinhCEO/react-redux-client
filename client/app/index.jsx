import React from 'react'
import ReactDOM from 'react-dom'
import reducer from './reducers/index.jsx'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import ReduxToastr from 'react-redux-toastr'

import {Router, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import routers from './routers.jsx'

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={browserHistory} routes={routers}/>
            <ReduxToastr
                timeOut={4000}
                newestOnTop={false}
                preventDuplicates
                position="bottom-right"
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar/>
        </div>
    </Provider>,
    document.getElementById('root')
);
