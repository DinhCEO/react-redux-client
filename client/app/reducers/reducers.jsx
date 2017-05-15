import {LOGIN, LOGOUT} from "../action/actions.jsx";

function reducerLogin(state = {isLogin: null, profile: {}}, action) {
    switch (action.type) {
        case LOGIN:
            return {isLogin: true, profile: action.profile};
            break;
        case LOGOUT:
            return {isLogin: false, profile: {}};
            break;
        default:
            return state;
    }
}


export default reducerLogin;