import {SET_AUTH_PROFILE, CLEAR_AUTH_PROFILE} from "../action/actions.jsx";

function reducerLogin(state = {isLogin: null, profile: {}}, action) {
    switch (action.type) {
        case SET_AUTH_PROFILE:
            return {isLogin: true, profile: action.profile};
            break;
        case CLEAR_AUTH_PROFILE:
            return {isLogin: false, profile: {}};
            break;
        default:
            return state;
    }
}


export default reducerLogin;