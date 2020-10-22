import { FETCH_APPOINTMENTS } from '../actions/actionType';

const INITIAL_STATE = { appointments: [] };

const appointmentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_APPOINTMENTS: return {
      ...state,
      appointments: action.payload,
    };
    default: return state;
  }
};

export default appointmentReducer;
