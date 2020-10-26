import { FETCH_FACILITY_REQUEST, FETCH_FACILITY_SUCCESS, FETCH_FACILITY_FAILURE } from '../redux/actions/actionType';
import facilityReducer from '../redux/reducers/facilityReducer';

describe('get Facilities', () => {
  const initialState = {
    facilityCollection: [],
  };

  it('should return the initial state when fetching for the facility', () => {
    expect(facilityReducer(undefined, {
      type: FETCH_FACILITY_REQUEST,
    })).toEqual({ ...initialState });
  });

  it('should return the facility collection when fetching request is successfully', () => {
    expect(facilityReducer(initialState, {
      type: FETCH_FACILITY_SUCCESS,
      payload: [{ yoga: 'yoga', workout: 'workout', dance: 'dance' }],
    })).toEqual({
      facilityCollection: [{
        yoga: 'yoga',
        dance: 'dance',
        workout: 'workout',
      }],
    });
  });

  it('should throw an error if fetching requesting is fails', () => {
    expect(facilityReducer(initialState, {
      type: FETCH_FACILITY_FAILURE,
      payload: 'error message',
    })).toEqual({
      facilityCollection: [],
    });
  });
});
