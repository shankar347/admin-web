export const actionTypes = {
  GET_ALL_SUPERADMINS_REQUEST: "GET_ALL_SUPERADMINS_REQUEST",
  GET_ALL_SUPERADMINS_SUCCESS: "GET_ALL_SUPERADMINS_SUCCESS",
  EDIT_ADMIN_REQUEST: "EDIT_ADMIN_REQUEST",
  EDIT_ADMIN_SUCCESS: "EDIT_ADMIN_SUCCESS",
  GET_ALL_ADMINS_REQUEST: "GET_ALL_ADMINS_REQUEST",
  GET_ALL_ADMINS_SUCCESS: "GET_ALL_ADMINS_SUCCESS",
  UPDATE_ADMIN_REQUEST: "UPDATE_ADMIN_REQUEST",
  UPDATE_ADMIN_SUCCESS: "UPDATE_ADMIN_SUCCESS",
};

export function getAllsuperadmins(payload) {
  return { type: actionTypes.GET_ALL_SUPERADMINS_REQUEST, payload };
}

export function getAllsuperadminsSuccess(payload) {
  return { type: actionTypes.GET_ALL_SUPERADMINS_SUCCESS, payload };
}

export function editSuperadmin(payload) {
  return { type: actionTypes.EDIT_ADMIN_REQUEST, payload };
}

export function editSuperadminSuccess(payload) {
  return { type: actionTypes.EDIT_ADMIN_SUCCESS, payload };
}

export function getAlladmins(payload) {
  return { type: actionTypes.GET_ALL_ADMINS_REQUEST, payload };
}

export function getAlladminsSuccess(payload) {
  return { type: actionTypes.GET_ALL_ADMINS_SUCCESS, payload };
}

export function updateadmin(payload) {
  return { type: actionTypes.UPDATE_ADMIN_REQUEST, payload };
}

export function updateadminSuccess(payload) {
  return { type: actionTypes.UPDATE_ADMIN_SUCCESS, payload };
}
