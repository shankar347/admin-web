import { all, put, call, takeEvery } from "redux-saga/effects";
import {
  actionTypes,
  createRouteSuccess,
  getAllRoutesSuccess,
  getfilteredRoutesSuccess,
  getTodayRoutesSuccess,
  getUserAllRoutesSuccess,
  getUserTodayRoutesSuccess,
} from "./action";
import DriverRepository from "~/repositories/DriverRepository";
import adminRepositery from "~/repositories/adminRepositery";

function* createRoutesaga({ payload }) {
  try {
    const response = yield call(DriverRepository.createRoute, payload);
    yield put(createRouteSuccess(response.data));
    // yield put(getAllRoutes());
  } catch (err) {}
}

function* getdriverallRoutessaga({ payload }) {
  try {
    const response = yield call(DriverRepository.getuserAllroutes, payload.id);
    yield put(getUserAllRoutesSuccess(response));
  } catch (err) {
    yield put(getUserAllRoutesSuccess([]));
  }
}

function* getdrivertodayRoutessaga({ payload }) {
  try {
    const response = yield call(
      DriverRepository.getuserTodayAllroutes,
      payload.id
    );
    yield put(getUserTodayRoutesSuccess(response));
  } catch (err) {
    yield put(getUserTodayRoutesSuccess([]));
  }
}

function* getAllroutessaga() {
  try {
    const response = yield call(adminRepositery.getallroutes);
    yield put(getAllRoutesSuccess(response));
  } catch (err) {
    yield put(getAllRoutesSuccess([]));
  }
}

function* getTodayroutessaga({ payload }) {
  try {
    const response = yield call(adminRepositery.todayroutes, payload);
    yield put(getTodayRoutesSuccess(response));
  } catch (err) {
    yield put(getTodayRoutesSuccess({ data: [] }));
  }
}

function* getfilteredRoutessaga({ payload }) {
  try {
    const response = yield call(
      adminRepositery.getlast7daysRoutes,
      payload.startdate,
      payload.enddate
    );
    yield put(getfilteredRoutesSuccess(response));
  } catch (err) {
    yield put(getfilteredRoutesSuccess([]));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actionTypes.CREATE_ROUTE_REQUEST, createRoutesaga),
    takeEvery(actionTypes.GET_USER_ALL_ROUTES_REQUEST, getdriverallRoutessaga),
    takeEvery(
      actionTypes.GET_USER_TODAY_ROUTES_REQUEST,
      getdrivertodayRoutessaga
    ),
    takeEvery(actionTypes.GET_ALL_ROUTES_REQUEST, getAllroutessaga),
    takeEvery(actionTypes.GET_TODAY_ROUTES_REQUEST, getTodayroutessaga),
    takeEvery(actionTypes.GET_FILTERED_ROUTES_REQUEST, getfilteredRoutessaga),
  ]);
}
