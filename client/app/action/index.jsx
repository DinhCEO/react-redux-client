import {LOGIN, LOGOUT} from './actions.jsx'
import {AuthService} from '../services'
export function login({username, password}) {
    return async (dispatch) => {
        const result = await AuthService.signIn(username, password);
        console.log(result);
        AuthService.storeToken(result.token);
        AuthService.storeRole(result.profile.role);
        dispatch({type: LOGIN, profile: result.profile});
    };
}
export function logout() {
    AuthService.clearToken();
    AuthService.clearRole();
    return {
        type: LOGOUT
    }
}

