import { all, put, call, takeEvery } from 'redux-saga/effects';

import { actionTypes, getAdminUserMenuSuccess } from './action';

import AdminMenuRepository from '../../repositories/AdminMenuRepository';

function* getAdminUserMenuSaga() {
    try {
        const data = yield call(AdminMenuRepository.adminMenu);
        yield put(getAdminUserMenuSuccess(data));
    } catch (err) {
        yield put(getAdminUserMenuSuccess(null));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_ADMIN_USER_MENU_REQUEST, getAdminUserMenuSaga)]);
}
