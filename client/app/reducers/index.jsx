import {combineReducers} from 'redux'
import auth from './reducers.jsx'
import {reducer as formReducer} from 'redux-form'


const rootReducers = combineReducers({
    auth,
    form : formReducer
});

export default rootReducers;