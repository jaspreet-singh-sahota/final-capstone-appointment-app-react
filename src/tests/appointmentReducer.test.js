import { FETCH_APPOINTMENTS } from '../redux/actions/actionType';
import appointmentReducer from '../redux/reducers/appointmentReducer';

describe('Appointment reducer', () => {
  const initialState = [];

  it('should return the Appointment collection when fetching request is successfully', () => {
    expect(appointmentReducer(initialState, {
      type: FETCH_APPOINTMENTS,
      payload: [{ yoga: 'yoga', date: '20/10/2020', city: 'Delhi' }],
    })).toEqual([{
      yoga: 'yoga',
      date: '20/10/2020',
      city: 'Delhi',
    }]);
  });
});
