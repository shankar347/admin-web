export const actionTypes = {
  GET_ALL_RIDERS_REQUEST: "GET_ALL_RIDERS_REQUEST",
  GET_ALL_RIDERS_SUCCESS: "GET_ALL_RIDERS_SUCCESS",

  GET_ACTIVERIDERS_REQUEST: "GET_ACTIVERIDERS_REQUEST",
  GET_ACTIVERIDERS_SUCCESS: "GET_ACTIVERIDERS_SUCCESS",

  ADD_RIDER_REQUEST: "ADD_RIDER_REQUEST",
  ADD_RIDER_SUCCESS: "ADD_RIDER_SUCCESS",

  EDIT_RIDER_REQUEST: "EDIT_RIDER_REQUEST",
  EDIT_RIDER_SUCCESS: "EDIT_RIDER_SUCCESS",

  REMOVE_RIDER_REQUEST: "REMOVE_RIDER_REQUEST",
  REMOVE_RIDER_SUCCESS: "REMOVE_RIDER_SUCCESS",

  GET_ALL_USERS_REQUEST: "GET_ALL_USERS_REQUEST",
  GET_ALL_USERS_SUCCESS: "GET_ALL_USERS_SUCCESS",

  GET_RIDER_REQUEST: "GET_RIDER_REQUEST",
  GET_RIDER_SUCCESS: "GET_RIDER_SUCCESS",
};

export function getAllridersRequest(payload) {
  return { type: actionTypes.GET_ALL_RIDERS_REQUEST, payload };
}

export function getAllriderssuccess(payload) {
  return { type: actionTypes.GET_ALL_RIDERS_SUCCESS, payload };
}

export function getAllusersRequest(payload) {
  return { type: actionTypes.GET_ALL_USERS_REQUEST, payload };
}

export function getAlluserssuccess(payload) {
  return { type: actionTypes.GET_ALL_USERS_SUCCESS, payload };
}

export function getActiveridersrequest(payload) {
  return { type: actionTypes.GET_ACTIVERIDERS_REQUEST, payload };
}

export function getActiveridersuccess(payload) {
  return { type: actionTypes.GET_ACTIVERIDERS_SUCCESS, payload };
}

export function getuserrequest(payload) {
  return { type: actionTypes.GET_RIDER_REQUEST, payload };
}

export function getusersuccess(payload) {
  return { type: actionTypes.GET_RIDER_SUCCESS, payload };
}
