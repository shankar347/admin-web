export const actionTypes = {
  CREATE_ROUTE_REQUEST: "CREATE_ROUTE_REQUEST",
  CREATE_ROUTE_SUCCESS: "CREATE_ROUTE_SUCCESS",
  GET_USER_ALL_ROUTES_REQUEST: "GET_USER_ALL_ROUTES_REQUEST",
  GET_USER_ALL_ROUTES_SUCCESS: "GET_USER_ALL_ROUTES_SUCCESS",
  GET_USER_TODAY_ROUTES_REQUEST: "GET_USER_TODAY_ROUTES_REQUEST",
  GET_USER_TODAY_ROUTES_SUCCESS: "GET_USER_TODAY_ROUTES_SUCCESS",
  GET_ALL_ROUTES_REQUEST: "GET_ALL_ROUTES_REQUEST",
  GET_ALL_ROUTES_SUCCESS: "GET_ALL_ROUTES_SUCCESS",
  GET_TODAY_ROUTES_REQUEST: "GET_TODAY_ROUTES_REQUEST",
  GET_TODAY_ROUTES_SUCCESS: "GET_TODAY_ROUTES_SUCCESS",
  GET_FILTERED_ROUTES_REQUEST: "GET_FILTERED_ROUTES_REQUEST",
  GET_FILTERED_ROUTES_SUCCESS: "GET_FILTERED_ROUTES_SUCCESS",
  UPDATE_LATE_AND_LONG_REQUEST: "UPDATE_LATE_AND_LONG_REQUEST",
  UPDATE_LATE_AND_LONG_SUCCESS: "UPDATE_LATE_AND_LONG_SUCCESS",
};

export function getUserAllRoutes(payload) {
  return { type: actionTypes.GET_USER_ALL_ROUTES_REQUEST, payload };
}

export function getUserAllRoutesSuccess(payload) {
  return { type: actionTypes.GET_USER_ALL_ROUTES_SUCCESS, payload };
}

export function getUserTodayRoutes(payload) {
  return { type: actionTypes.GET_USER_TODAY_ROUTES_REQUEST, payload };
}

export function getUserTodayRoutesSuccess(payload) {
  return { type: actionTypes.GET_USER_TODAY_ROUTES_SUCCESS, payload };
}

export function createRoute(payload) {
  return { type: actionTypes.CREATE_ROUTE_REQUEST, payload };
}

export function createRouteSuccess(payload) {
  return { type: actionTypes.CREATE_ROUTE_SUCCESS, payload };
}

export function getAllRoutes(payload) {
  return { type: actionTypes.GET_ALL_ROUTES_REQUEST, payload };
}

export function getAllRoutesSuccess(payload) {
  return { type: actionTypes.GET_ALL_ROUTES_SUCCESS, payload };
}

export function getTodayRoutesRequest(payload) {
  return { type: actionTypes.GET_TODAY_ROUTES_REQUEST, payload };
}

export function getTodayRoutesSuccess(payload) {
  return { type: actionTypes.GET_TODAY_ROUTES_SUCCESS, payload };
}

export function getfilteredRoutes(payload) {
  return { type: actionTypes.GET_FILTERED_ROUTES_REQUEST, payload };
}

export function getfilteredRoutesSuccess(payload) {
  return { type: actionTypes.GET_FILTERED_ROUTES_SUCCESS, payload };
}

export function updateLatAndLong(payload) {
  return { type: actionTypes.UPDATE_LATE_AND_LONG_REQUEST, payload };
}

export function updateLatAndLongSuccess(payload) {
  return { type: actionTypes.UPDATE_LATE_AND_LONG_SUCCESS, payload };
}
