import { all, put, call, takeEvery } from "redux-saga/effects";
import ticketRepositery from "~/repositories/ticketRepositery";
import {
  actionTypes,
  getAllticketsSuccess,
  getTotalticketsSuccess,
} from "./action";

function* getAllticketssaga() {
  try {
    const data = yield call(ticketRepositery.getAllticketesforcourier);
    yield put(getAllticketsSuccess(data));
  } catch (err) {
    yield put(getAllticketsSuccess([]));
  }
}

function* getTotalticketssaga() {
  try {
    const data = yield call(ticketRepositery.getAllticketes);

    yield put(getTotalticketsSuccess(data));
  } catch (err) {
    yield put(getTotalticketsSuccess([]));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actionTypes.GET_ALL_TICKETS_REQUEST, getAllticketssaga),
    takeEvery(actionTypes.GET_TOTAL_TICKETS_REQUEST, getTotalticketssaga),
  ]);
}
