import { all, put, call, takeEvery } from "redux-saga/effects";
import {
  actionTypes,
  getAllriderssuccess,
  getActiveridersuccess,
  getAlluserssuccess,
  getusersuccess,
} from "./action";
import adminRepositery from "~/repositories/adminRepositery";
import DriverRepository from "~/repositories/DriverRepository";

function* getAllridersaga({ payload }) {
  try {
    const response = yield call(adminRepositery.getAlldrivers, payload);
    yield put(getAllriderssuccess(response)); // response already has data
  } catch (err) {
    yield put(getAllriderssuccess([]));
  }
}

function* getAlluserssaga({ payload }) {
  try {
    const response = yield call(adminRepositery.getAllusers, payload);
    yield put(getAlluserssuccess(response)); // response already has data
  } catch (err) {
    yield put(getAlluserssuccess([]));
  }
}

function* getActiveridersaga({ payload }) {
  try {
    const response = yield call(adminRepositery.activeRiders, payload);
    yield put(getActiveridersuccess(response));
  } catch (err) {
    yield put(getActiveridersuccess({ data: [] }));
  }
}

function* getUsersaga({ payload }) {
  try {
    const response = yield call(DriverRepository.getProfile, payload.id);
    yield put(getusersuccess(response));
  } catch (err) {
    yield put(getusersuccess(null));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actionTypes.GET_ALL_RIDERS_REQUEST, getAllridersaga),
    takeEvery(actionTypes.GET_ALL_USERS_REQUEST, getAlluserssaga),
    takeEvery(actionTypes.GET_ACTIVERIDERS_REQUEST, getActiveridersaga),
    takeEvery(actionTypes.GET_RIDER_REQUEST, getUsersaga),
  ]);
}
