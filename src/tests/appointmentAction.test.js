import { FETCH_APPOINTMENTS } from '../redux/actions/actionType';
import fetchAppointments from '../redux/actions/appointmentAction';

describe('get Appointment', () => {
  const appointments = 'appointments';

  it('should create an action to fetch the appointments', () => {
    const expectedAction = {
      type: FETCH_APPOINTMENTS,
      payload: appointments,
    };
    expect(fetchAppointments(appointments)).toEqual(expectedAction);
  });
});
