import {combineReducers} from 'redux'
import isLogin from './reducers.jsx'
import {reducer as formReducer} from 'redux-form'


const rootReducers = combineReducers({
    isLogin,
    form : formReducer
});

export default rootReducers;