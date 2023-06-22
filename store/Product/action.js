export const actionTypes = {
    GET_ALL_PRODUCT_REQUEST: 'GET_ALL_PRODUCT_REQUEST',
    GET_ALL_PRODUCT_SUCCESS: 'GET_ALL_PRODUCT_SUCCESS',
    GET_INACTIVE_PRODUCT_REQUEST: 'GET_INACTIVE_PRODUCT_REQUEST',
    GET_INACTIVE_PRODUCT_SUCCESS: 'GET_INACTIVE_PRODUCT_SUCCESS'
};

export function getAllProduct(payload) {
    return { type: actionTypes.GET_ALL_PRODUCT_REQUEST, payload };
}

export function getAllProductSuccess(payload) {
    return { type: actionTypes.GET_ALL_PRODUCT_SUCCESS, payload };
}

export function getInactiveProduct(payload) {
    return { type: actionTypes.GET_INACTIVE_PRODUCT_REQUEST, payload };
}

export function getInactiveProductSuccess(payload) {
    return { type: actionTypes.GET_INACTIVE_PRODUCT_SUCCESS, payload };
}
