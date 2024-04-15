import { actionTypes } from './action';

export const initState = {
    allStage: [],
    activeCount: 0,
    inactiveCount: 0,
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.GET_ALL_STAGE_SUCCESS:
            return {
                ...state,
                ...{
                    allStage: action.payload && action.payload.data ? action.payload.data : [],
                    activeCount: action.payload && action.payload.activeCount ? action.payload.activeCount : 0,
                    inactiveCount: action.payload && action.payload.inactiveCount ? action.payload.inactiveCount : 0,
                },
            };
        default:
            return state;
    }
}

export default reducer;
