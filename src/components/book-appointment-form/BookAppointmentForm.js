import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { DatePickerComponent } from '../date-picker/DatePickerComponent'
import Axios from 'axios'
import { useSelector } from 'react-redux'
import Dropdown from '../dropdown/Dropdown'
import request from '../../axios/request'
import styles from './styles/BookAppointmentForm.module.css'

const BookAppointmentForm = ({ facilityId, facilityName }) => {
  const username = useSelector(state => state.user.currentUser);
  const [isActive, setIsActive] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null)
  const [city, setCity] = useState('')
  const [formSubmitMessage, setFormSubmitMessage] = useState(null)
  let dateToString;

  if (selectedDate) {
    const date = selectedDate.toString()
    dateToString = `${date.split(' ').slice(0, 5).join(' ')} AM`
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    Axios.post(
      request.setAppointment,
      {
        appointment: {
          facility_id: facilityId,
          date: dateToString,
          city: city,
        }
      },
      { withCredentials: true })
      .then(response => {
        if (response.data.status === "created") {
          setIsActive(false)
          setFormSubmitMessage(`You successfully booked an appointment on ${dateToString}`)
          setTimeout(() => {
            setFormSubmitMessage(null)
          }, 5000);
        }
      })
      .catch(error => {
        setFormSubmitMessage(`There was ${error} while booking the appointment. Try again after a while`)
        setTimeout(() => {
          setFormSubmitMessage(null)
        }, 5000);
      });
  }

  return (
    <div>
      {formSubmitMessage ? <h2 className={styles['success-message']}>{formSubmitMessage}</h2> : null}
      {!isActive ?
        <button className={styles.button} onClick={() => setIsActive(!isActive)}>BOOK A TRAIL</button> :
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles['form-input']}>
            <h2 className={styles['form-fields']}>NAME:- <span className={styles.span}>{username}</span></h2>
            <h2 className={styles.fields}>FACILITY:- <span className={styles.span}>{facilityName}</span></h2>
            <div className={`${styles.select} ${styles.fields}`}>
              <DatePickerComponent selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
              <Dropdown setCity={setCity} />
            </div>
            <div className={styles.select}>
              <button className={`${styles['inverted-button']} ${styles['back-button']}`} onClick={() => setIsActive(false)}>BACK</button>
              <button className={styles['inverted-button']} type="submit">BOOK NOW</button>
            </div>
          </div>
        </form>
      }
    </div>
  )
}

export default BookAppointmentForm
