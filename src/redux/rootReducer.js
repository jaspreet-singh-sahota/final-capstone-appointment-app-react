import { combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import facilityReducer from './reducers/facilityReducer';
import appointmentReducer from './reducers/appointmentReducer';
import errorReducer from './reducers/errorReducer';

const rootReducer = combineReducers({
  user: userReducer,
  facility: facilityReducer,
  appointment: appointmentReducer,
  error: errorReducer,
});

export default rootReducer;
