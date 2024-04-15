export const actionTypes = {
    GET_ALL_OPERATOR_REQUEST: 'GET_ALL_OPERATOR_REQUEST',
    GET_ALL_OPERATOR_SUCCESS: 'GET_ALL_OPERATOR_SUCCESS'
};

export function getAllOperator(payload) {
    return { type: actionTypes.GET_ALL_OPERATOR_REQUEST, payload };
}

export function getAllOperatorSuccess(payload) {
    return { type: actionTypes.GET_ALL_OPERATOR_SUCCESS, payload };
}
