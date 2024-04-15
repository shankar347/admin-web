export const actionTypes = {
    GET_ALL_UNIT_REQUEST: 'GET_ALL_UNIT_REQUEST',
    GET_ALL_UNIT_SUCCESS: 'GET_ALL_UNIT_SUCCESS',
    GET_INACTIVE_UNIT_REQUEST: 'GET_INACTIVE_UNIT_REQUEST',
    GET_INACTIVE_UNIT_SUCCESS: 'GET_INACTIVE_UNIT_SUCCESS'
};

export function getAllUnit(payload) {
    return { type: actionTypes.GET_ALL_UNIT_REQUEST, payload };
}

export function getAllUnitSuccess(payload) {
    return { type: actionTypes.GET_ALL_UNIT_SUCCESS, payload };
}
