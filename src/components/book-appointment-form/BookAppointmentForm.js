import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import DatePickerComponent from '../date-picker/DatePickerComponent';
import Dropdown from '../dropdown/Dropdown';
import { bookAppointment } from '../../axios/request';
import styles from './styles/BookAppointmentForm.module.css';

const BookAppointmentForm = ({ facilityId, facilityName }) => {
  const username = useSelector(state => state.user.currentUser);
  const [isActive, setIsActive] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [city, setCity] = useState('');
  const [formSubmitMessage, setFormSubmitMessage] = useState(null);
  let dateToString;

  if (selectedDate) {
    const date = selectedDate.toString();
    dateToString = `${date.split(' ').slice(0, 5).join(' ')}`;
  }

  const handleSubmit = event => {
    event.preventDefault();

    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };

    bookAppointment(facilityId, dateToString, city, username,
      setIsActive, setFormSubmitMessage, config);
  };

  return (
    <div>
      {formSubmitMessage ? <h2 className={styles['success-message']}>{formSubmitMessage}</h2> : null}
      {!isActive
        ? (
          <button type="button" className={styles.button} onClick={() => setIsActive(!isActive)}>
            BOOK A TRIAL
          </button>
        )
        : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles['form-input']}>
              <h2 className={styles['form-fields']}>
                NAME:-
                <span className={styles.span}>{username}</span>
              </h2>
              <h2 className={styles.fields}>
                FACILITY:-
                <span className={styles.span}>{facilityName}</span>
              </h2>
              <div className={`${styles.select} ${styles.fields}`}>
                <DatePickerComponent
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                />
                <Dropdown setCity={setCity} />
              </div>
              <div className={styles.select}>
                <button type="button" className={`${styles['inverted-button']} ${styles['back-button']}`} onClick={() => setIsActive(false)}>BACK</button>
                <button className={styles['inverted-button']} type="submit">BOOK NOW</button>
              </div>
            </div>
          </form>
        )}
    </div>
  );
};

BookAppointmentForm.propTypes = {
  facilityId: PropTypes.number.isRequired,
  facilityName: PropTypes.string,
};

BookAppointmentForm.defaultProps = {
  facilityName: '',
};

export default BookAppointmentForm;
