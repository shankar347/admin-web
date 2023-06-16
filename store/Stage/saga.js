import { all, put, call, takeEvery } from 'redux-saga/effects';

import { actionTypes, getAllStageSuccess, getInactiveStageSuccess } from './action';

import StageRepository from '../../repositories/StageRepository';

function* getAllStageSaga({ payload }) {
    try {
        const data = yield call(StageRepository.getStage, payload);
        yield put(getAllStageSuccess(data.data));
    } catch (err) {
        yield put(getAllStageSuccess(null));
    }
}

function* getInactiveStageSaga({ payload }) {
    try {
        const data = yield call(StageRepository.getInactiveStage, payload);
        yield put(getInactiveStageSuccess(data.data));
    } catch (err) {
        yield put(getInactiveStageSuccess(null));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_ALL_STAGE_REQUEST, getAllStageSaga)]);
    yield all([takeEvery(actionTypes.GET_INACTIVE_STAGE_REQUEST, getInactiveStageSaga)]);
}
