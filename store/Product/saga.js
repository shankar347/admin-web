import { all, put, call, takeEvery } from 'redux-saga/effects';

import { actionTypes, getAllProductSuccess } from './action';

import ProductRepository from '../../repositories/ProductRepository';

function* getAllProductSaga({ payload }) {
    try {
        const data = yield call(ProductRepository.getProduct, payload);
        yield put(getAllProductSuccess(data.data));
    } catch (err) {
        yield put(getAllProductSuccess(null));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_ALL_PRODUCT_REQUEST, getAllProductSaga)]);
}
