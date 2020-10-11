import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import request from '../axios/request'
import Axios from 'axios'
import logIn from '../redux/actions/user-action/userAction'
import { Redirect } from 'react-router'

const LogInPage = () => {
  const user = useSelector(state => state.user.isLoggedIn)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();

    

  return (
    <div>
      {!user ?
        <>
          {
            errors.length ? <ul>Error
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul> : null
          }
          < form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={username}
              onChange={event => setUsername(event.target.value)}
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

            <button type="submit">Log in</button>
          </form>
        </>
        : <Redirect to='/' />
      }
    </div >
  );
}

export default LogInPage
