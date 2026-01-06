export const actionTypes = {
  GET_ALL_TICKETS_REQUEST: "GET_ALL_TICKETS_REQUEST",
  GET_ALL_TICKETS_SUCCESS: "GET_ALL_TICKETS_SUCCESS",
  GET_TOTAL_TICKETS_REQUEST: "GET_TOTAL_TICKETS_REQUEST",
  GET_TOTAL_TICKETS_SUCCESS: "GET_TOTAL_TICKETS_SUCCESS",
};

export function getAlltickets(payload) {
  return { type: actionTypes.GET_ALL_TICKETS_REQUEST, payload };
}

export function getAllticketsSuccess(payload) {
  return { type: actionTypes.GET_ALL_TICKETS_SUCCESS, payload };
}

export function getTotaltickets(payload) {
  return { type: actionTypes.GET_TOTAL_TICKETS_REQUEST, payload };
}

export function getTotalticketsSuccess(payload) {
  return { type: actionTypes.GET_TOTAL_TICKETS_SUCCESS, payload };
}
