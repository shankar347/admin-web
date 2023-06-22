import { actionTypes } from './action';

export const initState = {
    allStage: [],
    activeTotalCount: 0,
    activeCount: 0,
    inactiveStage: [],
    inactiveTotalCount: 0,
    inactiveCount: 0,
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.GET_ALL_STAGE_SUCCESS:
            return {
                ...state,
                ...{
                    allStage: action.payload && action.payload.rows ? action.payload.rows : [],
                    activeTotalCount: action.payload && action.payload.totalCount ? action.payload.totalCount : 0,
                    activeCount: action.payload && action.payload.count ? action.payload.count : 0,
                },
            };
        case actionTypes.GET_INACTIVE_STAGE_SUCCESS:
            return {
                ...state,
                ...{
                    inactiveStage: action.payload && action.payload.rows ? action.payload.rows : [],
                    inactiveTotalCount: action.payload && action.payload.totalCount ? action.payload.totalCount : 0,
                    inactiveCount: action.payload && action.payload.count ? action.payload.count : 0,
                },
            };
        default:
            return state;
    }
}

export default reducer;
