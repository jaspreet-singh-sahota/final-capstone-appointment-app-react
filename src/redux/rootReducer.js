import { combineReducers } from 'redux';
import userReducer from './reducers/user/userReducer'
import facilityReducer from './reducers/facility/facilityReducer';


const rootReducer = combineReducers({
  user: userReducer,
  facility: facilityReducer
});

export default rootReducer;
