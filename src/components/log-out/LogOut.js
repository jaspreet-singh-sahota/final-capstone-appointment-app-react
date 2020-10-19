/* eslint-disable  jsx-a11y/click-events-have-key-events */
/* eslint-disable  jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';
import { logOut } from '../../redux/actions/user-action/userAction';
import request from '../../axios/request';

const LogOut = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  const dispatch = useDispatch();
  const handleLogOut = () => {
    Axios
      .delete(request.logUserOut, { withCredentials: true })
      .then(response => {
        if (response.data.logged_out) {
          dispatch(logOut());
        }
      })
      .catch(error => {
        dispatch(logOut(error));
      });
  };

  return (
    <div>
      {isLoggedIn ? <h3 onClick={() => handleLogOut()}>Log Out</h3>
        : (
          <div>

            <h3>
              <NavLink
                to="/login"
                exact
                activeStyle={{
                  backgroundColor: '#97bf0f',
                  color: 'white',
                  padding: '10px 69.9% 10px 10px',
                  marginLeft: '-10px',
                }}
              >
                Log in
              </NavLink>
            </h3>
            <h3 style={{ marginTop: '20px' }}>
              <NavLink
                to="/sign-in"
                exact
                activeStyle={{
                  backgroundColor: '#97bf0f',
                  color: 'white',
                  padding: '10px  63.78% 10px 10px',
                  marginLeft: '-10px',
                }}
              >
                Sign up
              </NavLink>
            </h3>
          </div>
        )}
    </div>
  );
};

export default LogOut;
