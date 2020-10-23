import Axios from 'axios';
import {
  fetchFacilitySuccess,
  fetchFacilityFailure,
} from '../redux/actions/facilityAction';
import logIn from '../redux/actions/userAction';
import fetchAppointments from '../redux/actions/appointmentAction';

const request = {
  logUserIn: 'https://jassi-appointment-app.herokuapp.com/api/v1/login',
  SignUserIn: 'https://jassi-appointment-app.herokuapp.com/api/v1/authentication',
  facilityData: 'https://jassi-appointment-app.herokuapp.com/api/v1/facilities',
  setAppointment: 'https://jassi-appointment-app.herokuapp.com/api/v1/appointments',
  getAppointment: 'https://jassi-appointment-app.herokuapp.com/api/v1/appointments',
};

export const requestSignUserIn = async (dispatch, username, email, password,
  passwordConfirmation, setErrors) => {
  try {
    const response = await Axios.post(request.SignUserIn,
      {
        user: {
          username,
          email,
          password,
          password_confirmation: passwordConfirmation,
        },
      });
    if (response.status === 201) {
      localStorage.setItem('token',
        JSON.stringify({
          key: response.data.token,
          username: response.data.user.username,
        }));
      dispatch(logIn(response.data.user.username));
    }
  } catch (error) {
    setErrors([error.response.data.errors]);
  }
};

export const requestAppointments = async (dispatch, username) => {
  try {
    const response = await Axios.get(request.getAppointment,
      {
        params: {
          username,
        },
      });
    if (response.status === 200) {
      dispatch(fetchAppointments(response.data.appointments));
    }
  } catch (error) {
    fetchAppointments(error);
  }
};

export const requestLogUserIn = async (dispatch, username, password, setErrors) => {
  try {
    const response = await Axios.post(
      request.logUserIn,
      {
        user: {
          username,
          password,
        },
      },
    );
    if (response.status === 200) {
      localStorage.setItem('token',
        JSON.stringify({
          key: response.data.token,
          username: response.data.user.username,
        }));
      dispatch(logIn(response.data.user.username));
    }
  } catch (error) {
    setErrors([error.response.data.error]);
  }
};

export const requestFacilityData = async dispatch => {
  try {
    const response = await Axios.get(request.facilityData);
    if (response.status === 200) {
      dispatch(fetchFacilitySuccess(response.data));
    }
  } catch (error) {
    dispatch(fetchFacilityFailure(error.response.data.error));
  }
};

export const bookAppointment = async (facilityId, dateToString, city, username,
  setIsActive, setFormSubmitMessage, config) => {
  try {
    const response = await Axios.post(
      request.setAppointment,
      {
        config,
        appointment: {
          facility_id: facilityId,
          date: dateToString,
          city,
          username,
        },
      },
    );
    if (response.status === 201) {
      setIsActive(false);
      setFormSubmitMessage(`You successfully booked an appointment on ${dateToString}`);
      setTimeout(() => {
        setFormSubmitMessage(null);
      }, 5000);
    }
  } catch (error) {
    setFormSubmitMessage(`There was ${error.response.data.error} while booking the appointment. Try again after a while`);
    setTimeout(() => {
      setFormSubmitMessage(null);
    }, 5000);
  }
};
