import { actionTypes } from "./action";

export const initState = {
  allRiders: [],
  activeRiders: [],
  allUsers: [],
  user: {
    user_id: "",
    phoneno: "",
    branch: {
      name: "",
      address: "",
    },
    area: {
      name: "",
    },
    createdAt: "",
    address: "",
  },
};

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_RIDERS_SUCCESS:
      return {
        ...state,
        allRiders: action.payload?.data || [],
      };

    case actionTypes.GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        allUsers: action.payload?.data || [],
      };

    case actionTypes.GET_ACTIVERIDERS_SUCCESS:
      return {
        ...state,
        activeRiders: action.payload?.data || [],
      };

    case actionTypes.GET_RIDER_SUCCESS:
      return {
        ...state,
        user: action.payload?.data || null,
      };
    default:
      return state;
  }
}

export default reducer;
