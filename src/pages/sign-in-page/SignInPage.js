/* eslint-disable  react/no-array-index-key */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import styles from './styles/signInPage.module.css';
import InputField from '../../components/input-field/InputField';
import Button from '../../components/button/Button';
import { requestSignUserIn } from '../../axios/request';

const SignInPage = () => {
  const facility = useSelector(state => state.facility.facilityCollection[4]);
  const user = useSelector(state => state.user.isLoggedIn);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  let imageUrl;

  if (facility) {
    imageUrl = facility.image_url;
  }

  const handleSubmit = event => {
    event.preventDefault();

    requestSignUserIn(dispatch, username, email, password, passwordConfirmation, setErrors);
  };

  return (
    <div className={styles.container}>
      <img className={styles['background-image']} src={imageUrl} alt="login-page" />
      <div className={styles['background-color']} />
      {!user
        ? (
          <>
            {errors.length ? (
              <ul>
                {errors[0].map((error, idx) => (
                  <li
                    className={styles.errors}
                    key={idx}
                  >
                    {error}
                  </li>
                ))}
              </ul>
            ) : null}
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

              <Button>Register</Button>
            </form>
          </>
        )
        : <Redirect to="/" />}
    </div>
  );
};

export default SignInPage;
