import { actionTypes } from "./action";

export const initState = {
  allSuperadmins: [],
  alladmins: [],
};

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_SUPERADMINS_SUCCESS:
      return {
        ...state,
        allSuperadmins: action.payload?.data || [],
      };
    case actionTypes.EDIT_ADMIN_SUCCESS:
      return {
        ...state,
        allSuperadmins: state.allSuperadmins.map((admin) =>
          admin._id === action.payload.data._id ? action.payload.data : admin
        ),
      };
    case actionTypes.GET_ALL_ADMINS_SUCCESS:
      return {
        ...state,
        alladmins: action.payload?.data || [],
      };
    case actionTypes.UPDATE_ADMIN_SUCCESS:
      return {
        ...state,
        alladmins: state.alladmins.map((admin) =>
          admin._id === action.payload.data._id ? action.payload.data : admin
        ),
      };
    default:
      return state;
  }
}

export default reducer;
