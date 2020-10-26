import { FETCH_FACILITY_REQUEST, FETCH_FACILITY_SUCCESS, FETCH_FACILITY_FAILURE } from '../redux/actions/actionType';
import { fetchFacilityRequest, fetchFacilitySuccess, fetchFacilityFailure } from '../redux/actions/facilityAction';

describe('Get Facilities', () => {
  const parameter = 'Facility';

  it('should create an action to fetch Facilities', () => {
    const expectedAction = {
      type: FETCH_FACILITY_REQUEST,
    };
    expect(fetchFacilityRequest()).toEqual(expectedAction);
  });

  it('should create an action for fetching Facilities successfully', () => {
    const expectedAction = {
      type: FETCH_FACILITY_SUCCESS,
      payload: parameter,
    };
    expect(fetchFacilitySuccess(parameter)).toEqual(expectedAction);
  });

  it('should create an action to handle the error while fetching Facilities', () => {
    const parameter = 'error message';
    const expectedAction = {
      type: FETCH_FACILITY_FAILURE,
      payload: parameter,
    };
    expect(fetchFacilityFailure(parameter)).toEqual(expectedAction);
  });
});
