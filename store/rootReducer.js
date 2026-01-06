import { combineReducers } from "redux";

import auth from "./auth/reducer";
import drivers from "./drivers/reducer";
import orders from "./orders/reducer";
import superadmins from "./superadmins/reducer";
import operator from "./orders/reducer";
import product from "./drivers/reducer";
import branches from "./branches/reducer";
import shorters from "./shorters/reducer";
import tickets from "./tickets/reducer";

export default combineReducers({
  auth,
  operator,
  drivers,
  orders,
  superadmins,
  product,
  branches,
  shorters,
  tickets,
});
