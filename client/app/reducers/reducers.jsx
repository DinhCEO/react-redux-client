import {LOGIN, LOGOUT} from "../action/actions.jsx";

function reducerLogin(state = false, action) {
    switch (action.type) {
        case LOGIN:
            return state = true;
            break;
        case LOGOUT:
            return state = false;
            break;
        default:
            return state;
    }
}


export default reducerLogin;