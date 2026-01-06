import { all, put, call, takeEvery } from "redux-saga/effects";

import { actionTypes, loginSuccess, logoutSuccess } from "./action";

import AuthRepository from "../../repositories/AuthRepository";

function* loginSaga({ payload }) {
  try {
    const data = yield call(AuthRepository.login, payload);
    if (data && data.statusCode === 200) {
      let res = data.data;
      res.isLoggedIn = true;
      yield put(loginSuccess(res));
    } else if (data && data.statusCode === 400) {
    } else if (data && data.statusCode === 404) {
    } else {
    }
  } catch (err) {
    // console.log(err);
  }
}

function* logoutSaga() {
  try {
    localStorage.removeItem("usertoken");
    yield put(logoutSuccess());
  } catch (err) {
    // console.log(err);
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actionTypes.LOGIN_REQUEST, loginSaga)]);
  yield all([takeEvery(actionTypes.LOGOUT_REQUEST, logoutSaga)]);
}
