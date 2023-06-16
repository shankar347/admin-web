export const actionTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGOUT_REQUEST: 'LOGOUT_REQUEST',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS'
};

export function login(payload) {
    return { type: actionTypes.LOGIN_REQUEST, payload };
}

export function loginSuccess(payload) {
    return { type: actionTypes.LOGIN_SUCCESS,payload };
}

export function logout() {
    return { type: actionTypes.LOGOUT_REQUEST };
}

export function logoutSuccess() {
    return { type: actionTypes.LOGOUT_SUCCESS };
}