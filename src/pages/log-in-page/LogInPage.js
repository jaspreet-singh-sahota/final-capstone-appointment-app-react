import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import request from '../../axios/request'
import Axios from 'axios'
import logIn from '../../redux/actions/user-action/userAction'
import { Redirect } from 'react-router'
import styles from './styles/login.module.css'
import InputField from '../../components/input-field/InputField'
import Button from '../../components/button/Button'



const LogInPage = () => {
  const facility = useSelector(state => state.facility.facilityCollection[2])
  const user = useSelector(state => state.user.isLoggedIn)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const dispatch = useDispatch()
  let image_url;

  if (facility) {
    image_url = facility.image_url
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    Axios.post(
      request.logUserIn,
      {
        user: {
          username: username,
          password: password,
        }
      },
      { withCredentials: true })
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
          <img className={styles['background-image']} src={image_url} alt='login-page' />
          <div className={styles['background-color']}></div>
          {
            errors.length ? <ul>
              {errors.map((error, idx) => <li className={styles.errors} key={idx}>{error}</li>)}
            </ul> : null
          }
          <div>

            < form onSubmit={handleSubmit}>
              <div className={styles["form-container"]}>
                <div className={styles.input}>
                  <InputField
                    type="text"
                    name="username"
                    placeholder="username"
                    value={username}
                    handlerOnChange={event => setUsername(event.target.value)}
                    required
                  />
                </div>
                <div className={styles.password}>
                  <InputField
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    handlerOnChange={event => setPassword(event.target.value)}
                    required
                  />
                </div>
              </div>
              <div className={styles.button}>
                <Button type="submit">Log in</Button>
              </div>
            </form>
          </div>
        </>
        : <Redirect to='/' />
      }
    </div >
  );
}

export default LogInPage
