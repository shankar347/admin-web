import { actionTypes } from "./action";

export const initState = {
  allBranch: [],
};

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_BRANCH_SUCCESS:
      return {
        ...state,
        allBranch: action.payload.data || [],
      };
    case actionTypes.EDIT_BRANCH_SUCCESS:
      return {
        ...state,
        allBranch: state.allBranch.map((branch) =>
          branch._id === action.payload.data._id ? action.payload.data : branch
        ),
      };

    default:
      return state;
  }
}

export default reducer;
