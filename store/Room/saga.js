import { all, put, call, takeEvery } from 'redux-saga/effects';

import { actionTypes, getAllRoomSuccess, getInactiveRoomSuccess } from './action';

import RoomRepository from '../../repositories/RoomRepository';

function* getAllRoomSaga({ payload }) {
    try {
        const data = yield call(RoomRepository.getRoom, payload);
        yield put(getAllRoomSuccess(data.data));
    } catch (err) {
        yield put(getAllRoomSuccess(null));
    }
}

function* getInactiveRoomSaga({ payload }) {
    try {
        const data = yield call(RoomRepository.getInactiveRoom, payload);
        yield put(getInactiveRoomSuccess(data.data));
    } catch (err) {
        yield put(getInactiveRoomSuccess(null));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_ALL_ROOM_REQUEST, getAllRoomSaga)]);
    yield all([takeEvery(actionTypes.GET_INACTIVE_ROOM_REQUEST, getInactiveRoomSaga)]);
}
