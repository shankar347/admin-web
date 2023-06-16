import { actionTypes } from './action';

export const initState = {
    userMenu: []
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.GET_ADMIN_USER_MENU_SUCCESS:
            return {
                ...state,
                ...{ userMenu: action.payload && action.payload.data.data && action.payload.data.data.length > 0 ? action.payload.data.data : [] },
            };
        default:
            return state;
    }
}

export default reducer;
