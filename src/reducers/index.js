import authReducer from './auth';
import roleReducer from './role';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    authReducer,
    roleReducer,
})

export default allReducers;