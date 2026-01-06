import { actionTypes } from "./action";

export const initState = {
  isLoggedIn: false,
  auth: {},
  token: "",
  isSidebarActive: false, // Add this
};

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...{
          auth: action.payload.auth,
          token: action.payload.token,
          isLoggedIn: true,
        },
      };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        ...{ auth: {}, token: "", isLoggedIn: false, isSidebarActive: false },
      };
    case actionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        isSidebarActive: !state.isSidebarActive,
      };
    case actionTypes.CLOSE_SIDEBAR:
      return {
        ...state,
        isSidebarActive: false,
      };
    case actionTypes.SET_SIDEBAR_STATE:
      return {
        ...state,
        isSidebarActive: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
