import { FETCH_APPOINTMENTS } from "../actionType";

export const fetchAppointments = (appointments) => ({
  type: FETCH_APPOINTMENTS,
  payload: appointments,
});
