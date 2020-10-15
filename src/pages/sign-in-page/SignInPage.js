import React, { useState } from 'react'
import Axios from 'axios'
import logIn from '../../redux/actions/user-action/userAction'
import request from '../../axios/request'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import styles from "./styles/signInPage.module.css"
import InputField from '../../components/input-field/InputField'
import Button from '../../components/button/Button'

const SignInPage = () => {
  const facility = useSelector(state => state.facility.facilityCollection[4])
  const user = useSelector(state => state.user.isLoggedIn)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState([])
  const dispatch = useDispatch()
  let image_url;

  if (facility) {
    image_url = facility.image_url
  }

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
  console.log(errors[0])

  return (
    <div className={styles.container}>
      <img className={styles['background-image']} src={image_url} alt='login-page' />
      <div className={styles['background-color']}></div>
      {!user ?
        <>
          {errors.length ? <ul >
            {errors[0].map((error, idx) => <li className={styles.errors} key={idx}>{error}</li>)}
          </ul> : null}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.input}>
              <InputField
                type="text"
                name="username"
                placeholder="username"
                value={username}
                handlerOnChange={event => setUsername(event.target.value)}
              />
            </div>
            <div className={styles.input}>
              <InputField
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                handlerOnChange={event => setEmail(event.target.value)}
                required
              />
            </div>

            <div className={styles.input}>
              <InputField
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                handlerOnChange={event => setPassword(event.target.value)}
                required
              />
            </div>
            <div className={styles.input}>
              <InputField
                type="password"
                name="password_confirmation"
                placeholder="Password confirmation"
                value={passwordConfirmation}
                handlerOnChange={event => setPasswordConfirmation(event.target.value)}
                required
              />
            </div>

            <Button type="submit">Register</Button>
          </form>
        </>
        : <Redirect to='/' />
      }
    </div>
  );
}

export default SignInPage
