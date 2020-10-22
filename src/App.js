import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import logIn from './redux/actions/user-action/userAction';
import request from './axios/request';
import SignInPage from './pages/sign-in-page/SignInPage';
import { fetchFacilitySuccess, fetchFacilityFailure } from './redux/actions/facility-action/facilityAction';
import HomePage from './pages/home-page/HomePage';
import AppointmentsPage from './pages/appointments-page/AppointmentsPage';
import Navbar from './components/navbar/Navbar';
import LogInPage from './pages/log-in-page/LogInPage';
import FacilityShowPage from './pages/facility-Show-page/FacilityShowPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('token'));

    if (user) {
      if (user.key) {
        dispatch(logIn(user.username));
      }
    }

    Axios.get(request.facilityData).then(response => {
      if (response.status === 200) {
        dispatch(fetchFacilitySuccess(response.data));
      }
    }).catch(error => {
      dispatch(fetchFacilityFailure(error));
    });
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Navbar />
        <Route exact id="HomePage" path="/" component={HomePage} />
        <Route exact id="LogInPage" path="/login" component={LogInPage} />
        <Route exact id="SignInPage" path="/sign-in" component={SignInPage} />
        <Route exact id="FacilityShowPage" path="/facility/:id" component={FacilityShowPage} />
        <Route exact id="AppointmentsPage" path="/appointments" component={AppointmentsPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
