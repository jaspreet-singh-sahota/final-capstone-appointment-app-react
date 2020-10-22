import { FETCH_APPOINTMENTS } from './actionType';

const fetchAppointments = appointments => ({
  type: FETCH_APPOINTMENTS,
  payload: appointments,
});

export default fetchAppointments;
