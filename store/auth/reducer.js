import { actionTypes } from './action';

export const initState = {
    isLoggedIn: false,
    auth: {},
    token: ''
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                ...{ auth: action.payload.auth, token: action.payload.token, isLoggedIn: true },
            };
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                ...{ auth: {}, token: '', isLoggedIn: false },
            };
        default:
            return state;
    }
}

export default reducer;
