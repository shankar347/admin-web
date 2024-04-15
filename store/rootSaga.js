import { all } from "redux-saga/effects";

import AuthSaga from "./auth/saga";
import UnitSaga from "./Unit/saga";
import RoomSaga from "./Room/saga";
import StageSaga from "./Stage/saga";
import operatorSaga from "./operator/saga";
import ProductSaga from "./Product/saga";

export default function* rootSaga() {
  yield all([
    AuthSaga(),
    RoomSaga(),
    UnitSaga(),
    StageSaga(),
    operatorSaga(),
    ProductSaga(),
  ]);
}
