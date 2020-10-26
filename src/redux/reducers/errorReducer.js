/* eslint-disable  no-return-assign */
/* eslint-disable  no-param-reassign */

import {
  FETCH_FACILITY_REQUEST,
  FETCH_FACILITY_SUCCESS,
  FETCH_FACILITY_FAILURE,
} from '../actions/actionType';

const INITIAL_STATE = {};

const errorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_FACILITY_REQUEST: return {
      ...state,
    };
    case FETCH_FACILITY_SUCCESS: return {
      ...state,
      error: {},
    };
    case FETCH_FACILITY_FAILURE: return {
      error: { ...action.payload },
    };
    default: return state;
  }
};

export default errorReducer;
