import { fetchFacilitySuccess,
   fetchFacilityFailure } from "../redux/actions/facility-action/facilityAction";
import Axios from 'axios';
import logIn from "../redux/actions/user-action/userAction";
import fetchAppointments from "../redux/actions/appointment-action/appointmentAction";

const request = {
  logUserIn: 'http://localhost:8080/api/v1/login',
  SignUserIn: 'http://localhost:8080/api/v1/authentication',
  facilityData: 'http://localhost:8080/api/v1/facilities',
  setAppointment: 'http://localhost:8080/api/v1/appointments',
  getAppointment: 'http://localhost:8080/api/v1/appointments',
};

export const requestSignUserIn = (dispatch, username, email , password, passwordConfirmation, setErrors) => 
Axios.post(
    request.SignUserIn,
    {
      user: {
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
      },
    },
  )
  .then(response => {
    if (response.data.status === 201) {
      localStorage.setItem('token',
        JSON.stringify({
          key: response.data.token,
          username: response.data.user.username,
        }));
      dispatch(logIn(response.data.user.username));
    } else {
      setErrors([response.data.errors]);
    }
  })
  .catch(error => {
    setErrors(error);
  });

export const requestAppointments = (dispatch, username) => Axios.get(request.getAppointment,
  {
    params: {
      username
    }
  })
  .then(response => {
    if (response.status === 200) {
      dispatch(fetchAppointments(response.data.appointments));
    }
  })
  .catch(error => {
    fetchAppointments(error);
  });


export const requestLogUserIn = (dispatch, username, password, setErrors) => Axios.post(
  request.logUserIn,
  {
    user: {
      username,
      password,
    },
  },
).then(response => {
    if (response.data.status === 200) {
      localStorage.setItem('token',
        JSON.stringify({
          key: response.data.token,
          username: response.data.user.username,
        }));
      dispatch(logIn(response.data.user.username));
    } else {
      setErrors([response.data.error]);
    }
  })
  .catch(error => {
    setErrors(error);
  });

export const requestFacilityData = (dispatch) => Axios.get(request.facilityData).then(response => {
  if (response.status === 200) {
    dispatch(fetchFacilitySuccess(response.data));
  }
}).catch(error => {
  dispatch(fetchFacilityFailure(error));
});

export const bookAppointment = (facilityId, dateToString, city, username, setIsActive, setFormSubmitMessage ,config) => Axios.post(
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
).then(response => {
    if (response.data.status === 201) {
      setIsActive(false);
      setFormSubmitMessage(`You successfully booked an appointment on ${dateToString}`);
      setTimeout(() => {
        setFormSubmitMessage(null);
      }, 5000);
    }
  })
  .catch(error => {
    setFormSubmitMessage(`There was ${error} while booking the appointment. Try again after a while`);
    setTimeout(() => {
      setFormSubmitMessage(null);
    }, 5000);
  });



export default request;
