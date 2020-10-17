import React from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import './styles/datepicker.css';

const DatePickerComponent = ({ selectedDate, setSelectedDate }) => (
  <ReactDatePicker
    selected={selectedDate}
    onChange={date => setSelectedDate(date)}
    minDate={new Date()}
    placeholderText="Pick a date"
    isClearable
    showTimeSelect
    timeFormat="HH:mm"
    minTime={(new Date(), 6)}
    maxTime={new Date()}
    timeIntervals={15}
    dateFormat="Pp"
    required
  />
);

DatePickerComponent.propTypes = {
  selectedDate: PropTypes.string,
  setSelectedDate: PropTypes.func.isRequired,
};

DatePickerComponent.defaultProps = {
  selectedDate: '',
};

export default DatePickerComponent;
