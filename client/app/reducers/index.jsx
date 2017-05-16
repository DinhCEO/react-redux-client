import {combineReducers} from 'redux'
import auth from './reducers.jsx'
import {reducer as formReducer} from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'


const rootReducers = combineReducers({
    auth,
    form: formReducer,
    toastr: toastrReducer
});

export default rootReducers;