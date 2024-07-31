import { combineReducers } from 'redux';
import authReducer from './authReducer';
import studentReducer from './studentReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  students: studentReducer
});

export default rootReducer;
