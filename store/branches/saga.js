import { all, put, call, takeEvery } from "redux-saga/effects";
import branchrepositery from "~/repositories/branchrepositery";

import { actionTypes, editbranchsuccess, getAllbranchSuccess } from "./action";

function* getAllbranchSaga() {
  try {
    const data = yield call(branchrepositery.getAllbranches);
    yield put(getAllbranchSuccess(data));
  } catch (err) {
    yield put(getAllbranchSuccess([]));
  }
}

function* editBranchsaga({ payload }) {
  try {
    const data = yield call(
      branchrepositery.editBranch,
      payload.id,
      payload.formdata
    );
    yield put(editbranchsuccess(data));
  } catch {}
}

export default function* rootSaga() {
  yield all([
    takeEvery(actionTypes.GET_ALL_BRANCH_REQUEST, getAllbranchSaga),
    takeEvery(actionTypes.EDIT_BRANCH_REQUEST, editBranchsaga),
  ]);
}
