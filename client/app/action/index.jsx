import {SET_AUTH_PROFILE, CLEAR_AUTH_PROFILE} from './actions.jsx'
import {AuthService} from '../services'
export function login({username, password}) {
    return async (dispatch) => {
        const result = await AuthService.signIn(username, password);
        AuthService.storeToken(result.token);
        AuthService.storeRole(JSON.stringify(result.profile));
        dispatch({type: SET_AUTH_PROFILE, profile: result.profile});
    };
}

export const checkToken = () => async (dispatch) => {
    try {
        if (!AuthService.getToken()) {
            dispatch({type: CLEAR_AUTH_PROFILE});
            return false;
        }

        const result = await AuthService.getProfile();
        const profile = result.profile || {};

        AuthService.storeRole(profile.role);
        dispatch({type: SET_AUTH_PROFILE, profile});
        return true;
    } catch (e) {
        AuthService.clearRole();
        AuthService.clearToken();
        dispatch({type: CLEAR_AUTH_PROFILE});
        return false;
    }
};
export function logout() {
    AuthService.clearToken();
    AuthService.clearRole();
    return {
        type: CLEAR_AUTH_PROFILE
    }
}

