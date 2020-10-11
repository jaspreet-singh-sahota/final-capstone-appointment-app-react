import React, { useState } from 'react'
import Axios from 'axios'
import logIn from '../../redux/actions/user-action/userAction'
import request from '../../axios/request'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'

const SignInPage = () => {
 

  return (
    <div>
      {!user ?
        <>
          {errors.length ? <ul>Error
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul> : null}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={username}
              onChange={event => setUsername(event.target.value)}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={event => setPassword(event.target.value)}
              required
            />

            <input
              type="password"
              name="password_confirmation"
              placeholder="Password confirmation"
              value={passwordConfirmation}
              onChange={event => setPasswordConfirmation(event.target.value)}
              required
            />

            <button type="submit">Register</button>
          </form>
        </>
        : <Redirect to='/' />
      }
    </div>
  );
}

export default SignInPage
