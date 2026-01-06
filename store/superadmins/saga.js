import { all, put, call, takeEvery } from "redux-saga/effects";

import {
  actionTypes,
  editSuperadminSuccess,
  getAlladminsSuccess,
  getAllsuperadminsSuccess,
  updateadminSuccess,
} from "./action";

import SuperadminRepositery from "../../repositories/SuperadminRepositery";
import adminRepositery from "~/repositories/adminRepositery";

function* getAllsuperadminsaga() {
  try {
    const data = yield call(SuperadminRepositery.getAllsuperadmins);
    yield put(getAllsuperadminsSuccess(data));
  } catch (err) {
    yield put(getAllsuperadminsSuccess([]));
  }
}

function* editSuperadminsaga({ payload }) {
  try {
    const data = yield call(
      SuperadminRepositery.editSuperadmin,
      payload.id,
      payload.formdata
    );
    yield put(editSuperadminSuccess(data));
  } catch (err) {}
}

function* getAlladminsaga() {
  try {
    const data = yield call(adminRepositery.getAlladmins);
    yield put(getAlladminsSuccess(data));
  } catch (err) {
    yield put(getAlladminsSuccess([]));
  }
}

function* editadminsaga({ payload }) {
  try {
    const data = yield call(
      adminRepositery.editAdmin,
      payload.id,
      payload.formdata
    );
    yield put(updateadminSuccess(data));
  } catch (err) {}
}

export default function* rootSaga() {
  yield all([
    takeEvery(actionTypes.GET_ALL_SUPERADMINS_REQUEST, getAllsuperadminsaga),
    takeEvery(actionTypes.EDIT_ADMIN_REQUEST, editSuperadminsaga),
    takeEvery(actionTypes.GET_ALL_ADMINS_REQUEST, getAlladminsaga),
    takeEvery(actionTypes.UPDATE_ADMIN_REQUEST, editadminsaga),
  ]);
}
