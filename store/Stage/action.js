export const actionTypes = {
    GET_ALL_STAGE_REQUEST: 'GET_ALL_STAGE_REQUEST',
    GET_ALL_STAGE_SUCCESS: 'GET_ALL_STAGE_SUCCESS',
    GET_INACTIVE_STAGE_REQUEST: 'GET_INACTIVE_STAGE_REQUEST',
    GET_INACTIVE_STAGE_SUCCESS: 'GET_INACTIVE_STAGE_SUCCESS'
};

export function getAllStage(payload) {
    return { type: actionTypes.GET_ALL_STAGE_REQUEST, payload };
}

export function getAllStageSuccess(payload) {
    return { type: actionTypes.GET_ALL_STAGE_SUCCESS, payload };
}

export function getInactiveStage(payload) {
    return { type: actionTypes.GET_INACTIVE_STAGE_REQUEST, payload };
}

export function getInactiveStageSuccess(payload) {
    return { type: actionTypes.GET_INACTIVE_STAGE_SUCCESS, payload };
}
