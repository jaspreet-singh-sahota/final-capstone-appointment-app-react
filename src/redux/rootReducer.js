import { combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import facilityReducer from './reducers/facilityReducer';
import appointmentReducer from './reducers/appointmentReducer';

const rootReducer = combineReducers({
  user: userReducer,
  facility: facilityReducer,
  appointment: appointmentReducer,
});

export default rootReducer;
