export const actionTypes = {
    GET_ALL_ROOM_REQUEST: 'GET_ALL_ROOM_REQUEST',
    GET_ALL_ROOM_SUCCESS: 'GET_ALL_ROOM_SUCCESS'
};

export function getAllRoom(payload) {
    return { type: actionTypes.GET_ALL_ROOM_REQUEST, payload };
}

export function getAllRoomSuccess(payload) {
    return { type: actionTypes.GET_ALL_ROOM_SUCCESS, payload };
}