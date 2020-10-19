var express = require('express');
// Import the library:
var cors = require('cors');

var whitelist = ['https://jassi-appointment-app.herokuapp.com/api/v1/logged_in',
 'https://jassi-appointment-app.herokuapp.com/api/v1/sessions',
  'https://jassi-appointment-app.herokuapp.com/api/v1/logout',
  'https://jassi-appointment-app.herokuapp.com/api/v1/registrations',
  'https://jassi-appointment-app.herokuapp.com/api/v1/facilities',
  'https://jassi-appointment-app.herokuapp.com/api/v1/set_appointment',
  'https://jassi-appointment-app.herokuapp.com/api/v1/get_appointment',]
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// Then pass them to cors:
app.use(cors(corsOptions));
