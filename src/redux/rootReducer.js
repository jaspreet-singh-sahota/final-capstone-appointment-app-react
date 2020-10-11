import { combineReducers } from 'redux';
import userReducer from './reducers/user/userReducer'


const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;
