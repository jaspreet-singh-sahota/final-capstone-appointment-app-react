import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { DatePickerComponent } from '../date-picker/DatePickerComponent'
import Axios from 'axios'
import { useSelector } from 'react-redux'
import Dropdown from '../dropdown/Dropdown'
import request from '../../axios/request'

const BookAppointmentForm = ({facilityId, facilityName }) => {
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

 
  return (
    <div>
      {formSubmitMessage ? <h2>{formSubmitMessage}</h2> : null}
      {!isActive ?
        <button onClick={() => setIsActive(!isActive)}>BOOK A CLASS</button> :
        <form onSubmit={handleSubmit}>
          <h2>NAME:- <span>{username}</span></h2>
          <h2>Facility:- <span>{facilityName}</span></h2>
          <DatePickerComponent selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
          <Dropdown setCity={setCity} />
          <button type="submit">BOOK NOW</button>
        </form>
      }
    </div>
  )
}

export default BookAppointmentForm
