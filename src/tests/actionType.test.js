import {
  LOG_IN, LOG_OUT, FETCH_FACILITY_REQUEST, FETCH_FACILITY_SUCCESS,
  FETCH_FACILITY_FAILURE, FETCH_APPOINTMENTS,
} from '../redux/actions/actionType';

describe('Action type', () => {
  it('LOG_IN actionType should be a string', () => {
    expect(LOG_IN).toEqual(expect.any(String));
  });

  it('LOG_OUT actionType should be a string', () => {
    expect(LOG_OUT).toEqual(expect.any(String));
  });

  it('FETCH_APPOINTMENTS actionType should be a string', () => {
    expect(FETCH_APPOINTMENTS).toEqual(expect.any(String));
  });

  it('FETCH_FACILITY_FAILURE actionType should be a string', () => {
    expect(FETCH_FACILITY_FAILURE).toEqual(expect.any(String));
  });

  it('FETCH_FACILITY_SUCCESS actionType should be a string', () => {
    expect(FETCH_FACILITY_SUCCESS).toEqual(expect.any(String));
  });

  it('FETCH_FACILITY_REQUEST actionType should be a string', () => {
    expect(FETCH_FACILITY_REQUEST).toEqual(expect.any(String));
  });
});
