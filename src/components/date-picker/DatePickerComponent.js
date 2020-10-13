import React from 'react';
import ReactDatePicker from 'react-datepicker';

export const DatePickerComponent = ({selectedDate, setSelectedDate}) => {

  return (
    <ReactDatePicker
      selected={selectedDate}
      onChange={date => setSelectedDate(date)}
      minDate={new Date()} placeholderText="Pick a date"
      isClearable={true}
      showTimeSelect
      timeFormat="HH:mm"
      minTime={new Date(), 6}
      maxTime={new Date()}
      timeIntervals={15}
      dateFormat="Pp"
      required
    />
  );
};
