export const actionTypes = {
    GET_ALL_STAGE_REQUEST: 'GET_ALL_STAGE_REQUEST',
    GET_ALL_STAGE_SUCCESS: 'GET_ALL_STAGE_SUCCESS'
};

export function getAllStage(payload) {
    return { type: actionTypes.GET_ALL_STAGE_REQUEST, payload };
}

export function getAllStageSuccess(payload) {
    return { type: actionTypes.GET_ALL_STAGE_SUCCESS, payload };
}
