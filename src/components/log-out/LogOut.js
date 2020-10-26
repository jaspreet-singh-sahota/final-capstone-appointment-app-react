/* eslint-disable  jsx-a11y/click-events-have-key-events */
/* eslint-disable  jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from '../../redux/actions/userAction';

const LogOut = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    localStorage.removeItem('token');
    dispatch(logOut());
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
                  width: '100%',
                  padding: '10px  67% 10px 10px',
                  marginLeft: '-10px',
                  display: 'inline-block',

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
