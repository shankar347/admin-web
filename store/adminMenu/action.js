export const actionTypes = {
    GET_ADMIN_USER_MENU_REQUEST: 'GET_ADMIN_USER_MENU_REQUEST',
    GET_ADMIN_USER_MENU_SUCCESS: 'GET_ADMIN_USER_MENU_SUCCESS'
};

export function getAdminUserMenu() {
    return { type: actionTypes.GET_ADMIN_USER_MENU_REQUEST };
}

export function getAdminUserMenuSuccess(payload) {
    return { type: actionTypes.GET_ADMIN_USER_MENU_SUCCESS, payload };
}