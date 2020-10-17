/* eslint-disable  no-return-assign */
/* eslint-disable  no-param-reassign */

import {
  FETCH_FACILITY_REQUEST,
  FETCH_FACILITY_SUCCESS,
  FETCH_FACILITY_FAILURE,
} from '../../actions/actionType';

const INITIAL_STATE = {
  loading: false,
  facilityCollection: [],
  error: '',
};

const facilityReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_FACILITY_REQUEST: return {
      ...state,
      loading: true,
    };
    case FETCH_FACILITY_SUCCESS: return {
      ...state,
      loading: false,
      facilityCollection: action.payload,
      error: '',
    };
    case FETCH_FACILITY_FAILURE: return {
      loading: false,
      facilityCollection: [],
      error: action.payload,
    };
    default: return state;
  }
};

export default facilityReducer;
