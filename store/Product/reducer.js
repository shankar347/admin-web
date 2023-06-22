import { actionTypes } from './action';

export const initState = {
    allProduct: [],
    activeTotalCount: 0,
    activeCount: 0,
    inactiveProduct: [],
    inactiveTotalCount: 0,
    inactiveCount: 0,
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.GET_ALL_PRODUCT_SUCCESS:
            return {
                ...state,
                ...{
                    allProduct: action.payload && action.payload.rows ? action.payload.rows : [],
                    activeTotalCount: action.payload && action.payload.totalCount ? action.payload.totalCount : 0,
                    activeCount: action.payload && action.payload.count ? action.payload.count : 0,
                },
            };
        case actionTypes.GET_INACTIVE_PRODUCT_SUCCESS:
            return {
                ...state,
                ...{
                    inactiveProduct: action.payload && action.payload.rows ? action.payload.rows : [],
                    inactiveTotalCount: action.payload && action.payload.totalCount ? action.payload.totalCount : 0,
                    inactiveCount: action.payload && action.payload.count ? action.payload.count : 0,
                },
            };
        default:
            return state;
    }
}

export default reducer;
