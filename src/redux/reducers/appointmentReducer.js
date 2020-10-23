import { FETCH_APPOINTMENTS } from '../actions/actionType';

const INITIAL_STATE = [];

const appointmentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_APPOINTMENTS: return [
      ...action.payload,
    ];
    default: return state;
  }
};

export default appointmentReducer;
