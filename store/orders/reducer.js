import { actionTypes } from "./action";

export const initState = {
  allRoutes: [],
  todayRoutes: [],
  filteredRoutes: [],
  driverallRoutes: [],
  drivertodayRoutes: [],
};

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_ROUTES_SUCCESS:
      return {
        ...state,
        ...{
          allRoutes: action.payload?.data || [],
          filteredRoutes: action.payload?.data || [],
        },
      };
    case actionTypes.GET_TODAY_ROUTES_SUCCESS:
      return {
        ...state,
        todayRoutes: action.payload.data || [],
      };
    case actionTypes.GET_FILTERED_ROUTES_SUCCESS:
      return {
        ...state,
        filteredRoutes: action.payload?.data || [],
      };
    case actionTypes.GET_USER_ALL_ROUTES_SUCCESS:
      return {
        ...state,
        driverallRoutes: action.payload?.data || [],
      };
    case actionTypes.GET_USER_TODAY_ROUTES_SUCCESS:
      return {
        ...state,
        drivertodayRoutes: action.payload?.data || [],
      };
    case actionTypes.CREATE_ROUTE_SUCCESS:
      return {
        ...state,
        allRoutes: [...state.allRoutes, action.payload?.data],
      };

    case actionTypes.UPDATE_LATE_AND_LONG_SUCCESS:
      return {
        ...state,
        allRoutes: state.allRoutes.map((route) =>
          route._id === action.payload?.data?._id
            ? { ...route, ...action.payload.data }
            : route
        ),
      };
    default:
      return state;
  }
}

export default reducer;
