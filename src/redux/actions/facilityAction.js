import { FETCH_FACILITY_REQUEST, FETCH_FACILITY_SUCCESS, FETCH_FACILITY_FAILURE } from './actionType';

export const fetchFacilityRequest = () => ({
  type: FETCH_FACILITY_REQUEST,
});

export const fetchFacilitySuccess = facilityCollection => ({
  type: FETCH_FACILITY_SUCCESS,
  payload: facilityCollection,
});

export const fetchFacilityFailure = error => ({
  type: FETCH_FACILITY_FAILURE,
  payload: error,
});
