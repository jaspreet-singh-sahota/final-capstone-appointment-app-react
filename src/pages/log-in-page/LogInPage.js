/* eslint-disable  react/no-array-index-key */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { requestLogUserIn } from '../../axios/request';
import styles from './styles/login.module.css';
import InputField from '../../components/input-field/InputField';
import Button from '../../components/button/Button';

const LogInPage = () => {
  const facility = useSelector(state => state.facility.facilityCollection[2]);
  const user = useSelector(state => state.user.isLoggedIn);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  let imageUrl;

  if (facility) {
    imageUrl = facility.image_url;
  }

  const handleSubmit = event => {
    event.preventDefault();

    requestLogUserIn(dispatch, username, password, setErrors);
  };

  return (
    <div>
      {!user
        ? (
          <>
            <img className={styles['background-image']} src={imageUrl} alt="login-page" />
            <div className={styles['background-color']} />
            {
            errors.length ? (
              <ul>
                {errors.map((error, idx) => <li className={styles.errors} key={idx}>{error}</li>)}
              </ul>
            ) : null
          }
            <div>

              <form onSubmit={handleSubmit}>
                <div className={styles['form-container']}>
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
                  <Button>Log in</Button>
                </div>
              </form>
            </div>
          </>
        )
        : <Redirect to="/" />}
    </div>
  );
};

export default LogInPage;
