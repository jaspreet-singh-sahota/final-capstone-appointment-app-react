import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import logIn from './redux/actions/user-action/userAction';
import request from './axios/request';
import LogInPage from './pages/log-in/LogInPage';
import SignInPage from './pages/sign-in/SignInPage';
import homePage from './pages/home/homePage';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={homePage} />
        <Route exact path="/login" component={LogInPage} />
        <Route exact path="/sign-in" component={SignInPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
