import { combineReducers } from 'redux';

import auth from './auth/reducer';
import adminMenu from './adminMenu/reducer';
import Room from './Room/reducer';
import Stage from './Stage/reducer';
import Unit from './Unit/reducer';
import operator from './operator/reducer';
import product from './Product/reducer';

export default combineReducers({
    auth,
    adminMenu,
    operator,
    Room,
    Stage,
    Unit,
    product
});