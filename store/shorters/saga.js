import { all, put, call, takeEvery } from "redux-saga/effects";
import shorterRepository from "~/repositories/shorterRepository";

import { actionTypes, getAllshorter, getAllshorterSuccess } from "./action";

function* getAllshorterssaga() {
  try {
    const data = yield call(shorterRepository.getallShorters);
    yield put(getAllshorterSuccess(data));
  } catch (err) {
    yield put(getAllshorterSuccess([]));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actionTypes.GET_ALL_SHORTERS_REQUEST, getAllshorterssaga),
  ]);
}
