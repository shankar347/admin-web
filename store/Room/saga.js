import { all, put, call, takeEvery } from 'redux-saga/effects';

import { actionTypes, getAllRoomSuccess } from './action';

import RoomRepository from '../../repositories/RoomRepository';

function* getAllRoomSaga({ payload }) {
    try {
        const data = yield call(RoomRepository.getRoom, payload);
        yield put(getAllRoomSuccess(data.data));
    } catch (err) {
        yield put(getAllRoomSuccess(null));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_ALL_ROOM_REQUEST, getAllRoomSaga)]);
}
