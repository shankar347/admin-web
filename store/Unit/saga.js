import { all, put, call, takeEvery } from 'redux-saga/effects';

import { actionTypes, getAllUnitSuccess, getInactiveUnitSuccess } from './action';

import UnitRepository from '../../repositories/UnitRepository';

function* getAllUnitSaga({ payload }) {
    try {
        const data = yield call(UnitRepository.getUnit, payload);
        yield put(getAllUnitSuccess(data.data));
    } catch (err) {
        yield put(getAllUnitSuccess(null));
    }
}

function* getInactiveUnitSaga({ payload }) {
    try {
        const data = yield call(UnitRepository.getInactiveUnit, payload);
        yield put(getInactiveUnitSuccess(data.data));
    } catch (err) {
        yield put(getInactiveUnitSuccess(null));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_ALL_UNIT_REQUEST, getAllUnitSaga)]);
    yield all([takeEvery(actionTypes.GET_INACTIVE_UNIT_REQUEST, getInactiveUnitSaga)]);
}
