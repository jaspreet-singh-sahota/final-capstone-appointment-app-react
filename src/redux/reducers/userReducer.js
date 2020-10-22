import { LOG_IN, LOG_OUT } from '../actions/actionType';

const INITIAL_STATE = {
  isLoggedIn: false,
  currentUser: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_IN: return {
      ...state,
      isLoggedIn: true,
      currentUser: action.payload,
    };
    case LOG_OUT: return {
      ...state,
      isLoggedIn: false,
      currentUser: '',
    };
    default: return state;
  }
};

export default userReducer;
