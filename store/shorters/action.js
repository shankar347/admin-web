export const actionTypes = {
  GET_ALL_SHORTERS_REQUEST: "GET_ALL_SHORTERS_REQUEST",
  GET_ALL_SHORTERS_SUCCESS: "GET_ALL_SHORTERS_SUCCESS",
};

export function getAllshorter(payload) {
  return { type: actionTypes.GET_ALL_SHORTERS_REQUEST, payload };
}

export function getAllshorterSuccess(payload) {
  return { type: actionTypes.GET_ALL_SHORTERS_SUCCESS, payload };
}
