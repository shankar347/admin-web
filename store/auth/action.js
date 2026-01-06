export const actionTypes = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGOUT_REQUEST: "LOGOUT_REQUEST",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  TOGGLE_SIDEBAR: "TOGGLE_SIDEBAR",
  CLOSE_SIDEBAR: "CLOSE_SIDEBAR", // Add this
  SET_SIDEBAR_STATE: "SET_SIDEBAR_STATE", // Add this
};

export function login(payload) {
  return { type: actionTypes.LOGIN_REQUEST, payload };
}

export function loginSuccess(payload) {
  return { type: actionTypes.LOGIN_SUCCESS, payload };
}

export function logout() {
  return { type: actionTypes.LOGOUT_REQUEST };
}

export function logoutSuccess() {
  return { type: actionTypes.LOGOUT_SUCCESS };
}

// Add these new actions
export function toggleSidebar() {
  return { type: actionTypes.TOGGLE_SIDEBAR };
}

export function closeeSidebar() {
  return { type: actionTypes.CLOSE_SIDEBAR };
}
export function setSidebarState(payload) {
  return { type: actionTypes.SET_SIDEBAR_STATE, payload };
}
