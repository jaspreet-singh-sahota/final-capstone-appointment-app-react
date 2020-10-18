import React from 'react';
import { shallow } from 'enzyme';
import DatePickerComponent from '../components/date-picker/DatePickerComponent';
import ReactDatePicker from 'react-datepicker';

describe('DatePickerComponent', () => {
  it('should render a <ReactDatePicker /> component', () => {
    const wrapper = shallow(<DatePickerComponent />);
    expect(wrapper.find(ReactDatePicker)).toHaveLength(1);
  });

  it('matches Render snapshot', () => {
    const wrapper = shallow(<DatePickerComponent />);
    expect(wrapper).toMatchSnapshot();
  });
})


