export const actionTypes = {
  GET_ALL_BRANCH_REQUEST: "GET_ALL_BRANCH_REQUEST",
  GET_ALL_BRANCH_SUCCESS: "GET_ALL_BRANCH_SUCCESS",
  EDIT_BRANCH_REQUEST: "EDIT_BRANCH_REQUEST",
  EDIT_BRANCH_SUCCESS: "EDIT_BRANCH_SUCCESS",
};

export function getAllbranch(payload) {
  return { type: actionTypes.GET_ALL_BRANCH_REQUEST, payload };
}

export function getAllbranchSuccess(payload) {
  return { type: actionTypes.GET_ALL_BRANCH_SUCCESS, payload };
}

export function editbranchRequest(payload) {
  return { type: actionTypes.EDIT_BRANCH_REQUEST, payload };
}

export function editbranchsuccess(payload) {
  return { type: actionTypes.EDIT_BRANCH_SUCCESS, payload };
}
