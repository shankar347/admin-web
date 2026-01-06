import { actionTypes } from "./action";

export const initState = {
  allShorters: [],
};

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_SHORTERS_SUCCESS:
      return {
        ...state,
        allShorters: action.payload.data ? action.payload.data : [],
      };
    default:
      return state;
  }
}

export default reducer;
