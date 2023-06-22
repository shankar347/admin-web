import { all, put, call, takeEvery } from 'redux-saga/effects';

import { actionTypes, getAllProductSuccess, getInactiveProductSuccess } from './action';

import ProductRepository from '../../repositories/ProductRepository';

function* getAllProductSaga({ payload }) {
    try {
        const data = yield call(ProductRepository.getProduct, payload);
        yield put(getAllProductSuccess(data.data));
    } catch (err) {
        yield put(getAllProductSuccess(null));
    }
}

function* getInactiveProductSaga({ payload }) {
    try {
        const data = yield call(ProductRepository.getInactiveProduct, payload);
        yield put(getInactiveProductSuccess(data.data));
    } catch (err) {
        yield put(getInactiveProductSuccess(null));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_ALL_PRODUCT_REQUEST, getAllProductSaga)]);
    yield all([takeEvery(actionTypes.GET_INACTIVE_PRODUCT_REQUEST, getInactiveProductSaga)]);
}
