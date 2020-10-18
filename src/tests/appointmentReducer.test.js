import { FETCH_APPOINTMENTS } from "../redux/actions/actionType";
import appointmentReducer from "../redux/reducers/appointment/appointmentReducer";

describe('Appointment reducer', () => {
  const initialState = { appointments: [] };

  it('should return the Appointment collection when fetching request is successfully', () => {
    expect(appointmentReducer(initialState, {
      type: FETCH_APPOINTMENTS,
      payload: [{ yoga: 'yoga', date: '20/10/2020', city: 'Delhi' }]
    })).toEqual({
      appointments: [{
        yoga: 'yoga',
        date: '20/10/2020',
        city: 'Delhi'
      }],
    });
  });

});