import authReducer from './auth';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    authReducer,
})

export default allReducers;