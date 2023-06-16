import { actionTypes } from './action';

export const initState = {
    allRoom: [],
    activeTotalCount: 0,
    activeCount: 0,
    inactiveRoom: [],
    inactiveTotalCount: 0,
    inactiveCount: 0,
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.GET_ALL_ROOM_SUCCESS:
            return {
                ...state,
                ...{
                    allRoom: action.payload && action.payload.data ? action.payload.data : [],
                    activeTotalCount: action.payload && action.payload.totalCount ? action.payload.totalCount : 0,
                    activeCount: action.payload && action.payload.count ? action.payload.count : 0,
                },
            };
        case actionTypes.GET_INACTIVE_ROOM_SUCCESS:
            return {
                ...state,
                ...{
                    inactiveRoom: action.payload && action.payload.data ? action.payload.data : [],
                    inactiveTotalCount: action.payload && action.payload.totalCount ? action.payload.totalCount : 0,
                    inactiveCount: action.payload && action.payload.count ? action.payload.count : 0,
                },
            };
        default:
            return state;
    }
}

export default reducer;
