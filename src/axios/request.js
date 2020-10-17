const request = {
  checkUserLoggedIn: 'https://jassi-appointment-app.herokuapp.com/api/v1/logged_in',
  logUserIn: 'https://jassi-appointment-app.herokuapp.com/api/v1/sessions',
  logUserOut: 'https://jassi-appointment-app.herokuapp.com/api/v1/logout',
  SignUserIn: 'https://jassi-appointment-app.herokuapp.com/api/v1/registrations',
  facilityData: 'https://jassi-appointment-app.herokuapp.com/api/v1/facilities',
  setAppointment: 'https://jassi-appointment-app.herokuapp.com/api/v1/set_appointment',
  getAppointment: 'https://jassi-appointment-app.herokuapp.com/api/v1/get_appointment',
};

export default request;
