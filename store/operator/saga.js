import { all, put, call, takeEvery } from "redux-saga/effects";

import { actionTypes, getAllOperatorSuccess } from "./action";

import AuthRepository from "../../repositories/AuthRepository";

function* getAllOperatorSaga({ payload }) {
  try {
    const data = yield call(AuthRepository.getAdmins, payload);
    yield put(getAllOperatorSuccess(data.data));
  } catch (err) {
    yield put(getAllOperatorSuccess(null));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actionTypes.GET_ALL_OPERATOR_REQUEST, getAllOperatorSaga),
  ]);
}
