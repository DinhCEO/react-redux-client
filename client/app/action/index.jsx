import {SET_AUTH_PROFILE, CLEAR_AUTH_PROFILE} from './actions.jsx'
import {authService} from '../services/index.jsx'
export function login({email, password}) {
    return async (dispatch) => {
        const result = await authService.signIn(email, password);
        authService.storeToken(result.token);
        authService.storeRole(JSON.stringify(result.profile));
        dispatch({type: SET_AUTH_PROFILE, profile: result.profile});
    };
}

export const checkToken = () => async (dispatch) => {
    try {
        if (!authService.getToken()) {
            dispatch({type: CLEAR_AUTH_PROFILE});
            return false;
        }

        const result = await authService.getProfile();
        const profile = result.profile || {};

        authService.storeRole(profile.role);
        dispatch({type: SET_AUTH_PROFILE, profile});
        return true;
    } catch (e) {
        authService.clearRole();
        authService.clearToken();
        dispatch({type: CLEAR_AUTH_PROFILE});
        return false;
    }
};
export function logout() {
    authService.clearToken();
    authService.clearRole();
    return {
        type: CLEAR_AUTH_PROFILE
    }
}

