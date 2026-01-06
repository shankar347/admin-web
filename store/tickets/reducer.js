import { actionTypes } from "./action";

const Initstate = {
  allTickets: [],
  totalTickets: [],
};

function reducer(state = Initstate, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_TICKETS_SUCCESS:
      return {
        ...state,
        allTickets: action.payload.data ? action.payload.data : [],
      };
    case actionTypes.GET_TOTAL_TICKETS_SUCCESS:
      return {
        ...state,
        totalTickets: action.payload.data ? action.payload.data : [],
      };
    default:
      return state;
  }
}

export default reducer;
