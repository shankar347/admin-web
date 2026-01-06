import { all } from "redux-saga/effects";

import AuthSaga from "./auth/saga";
import shortersSaga from "./shorters/saga";
import branchsaga from "./branches/saga";
import ordersaga from "./orders/saga";
import driversaga from "./drivers/saga";
import superadminsaga from "./superadmins/saga";
import ticketsaga from "./tickets/saga";

export default function* rootSaga() {
  yield all([
    AuthSaga(),
    shortersSaga(),
    branchsaga(),
    ordersaga(),
    driversaga(),
    superadminsaga(),
    ticketsaga(),
  ]);
}
