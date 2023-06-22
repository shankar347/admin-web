import { all, put, call, takeEvery } from 'redux-saga/effects';

import { actionTypes, getAllOperatorSuccess, getInactiveOperatorSuccess } from './action';

import OperatorRepository from '../../repositories/OperatorRepository';

function* getAllOperatorSaga({ payload }) {
    try {
        const data = yield call(OperatorRepository.getOperator, payload);
        yield put(getAllOperatorSuccess(data.data));
    } catch (err) {
        yield put(getAllOperatorSuccess(null));
    }
}

function* getInactiveOperatorSaga({ payload }) {
    try {
        const data = yield call(OperatorRepository.getInactiveOperator, payload);
        yield put(getInactiveOperatorSuccess(data.data));
    } catch (err) {
        yield put(getInactiveOperatorSuccess(null));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_ALL_OPERATOR_REQUEST, getAllOperatorSaga)]);
    yield all([takeEvery(actionTypes.GET_INACTIVE_OPERATOR_REQUEST, getInactiveOperatorSaga)]);
}
