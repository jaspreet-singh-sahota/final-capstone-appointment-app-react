import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import logIn from './redux/actions/user-action/userAction';
import request from './axios/request';
import LogInPage from './pages/log-in-page/LogInPage';
import SignInPage from './pages/sign-in-page/SignInPage';
import { fetchFacilitySuccess, fetchFacilityFailure } from './redux/actions/facility-action/facilityAction';
import HomePage from './pages/home-page/HomePage';
import FacilityShowPage from './pages/facility-Show-page/FacilityShowPage';
import Navbar from './components/navbar/Navbar';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    Axios.get(request.checkUserLoggedIn, { withCredentials: true })
      .then(response => {
        if (response.data.logged_in) {
          dispatch(logIn(response.data.user.username))
        }
      })
      .catch(error => {
        console.log("check login error", error);
      });

    Axios.get(request.facilityData).then(response => {
      if (response.data) {
        dispatch(fetchFacilitySuccess(response.data))
      }
    }).catch(error => {
      dispatch(fetchFacilityFailure(error))
    })
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LogInPage} />
        <Route exact path="/sign-in" component={SignInPage} />
        <Route exact path="/facility/:id" component={FacilityShowPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
