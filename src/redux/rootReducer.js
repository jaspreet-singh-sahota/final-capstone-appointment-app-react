import { combineReducers } from 'redux';
import userReducer from './reducers/user/userReducer';
import facilityReducer from './reducers/facility/facilityReducer';
import appointmentReducer from './reducers/appointment/appointmentReducer';

const rootReducer = combineReducers({
  user: userReducer,
  facility: facilityReducer,
  appointment: appointmentReducer,
});

export default rootReducer;
