import {LOGIN, LOGOUT} from './actions.jsx'

export function login() {
    return {
        type : LOGIN
    }
}
export function logout() {
    return {
        type : LOGOUT
    }
}

