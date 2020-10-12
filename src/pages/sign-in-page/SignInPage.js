import React, { useState } from 'react'
import Axios from 'axios'
import logIn from '../../redux/actions/user-action/userAction'
import request from '../../axios/request'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'

const SignInPage = () => {
  const user = useSelector(state => state.user.isLoggedIn)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState([])
  const dispatch = useDispatch()


  const handleSubmit = (event) => {
    event.preventDefault();

    Axios
      .post(
        request.SignUserIn,
        {
          user: {
            username: username,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.status === "created") {
          dispatch(logIn(response.data.user.username))
        } else {
          setErrors([response.data.errors])
        }
      })
      .catch(error => {
        console.log("registration error", error);
      });
  }

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
