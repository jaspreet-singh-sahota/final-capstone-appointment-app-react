import React from 'react';
import { shallow } from 'enzyme';
import ReactDatePicker from 'react-datepicker';
import DatePickerComponent from '../components/date-picker/DatePickerComponent';

describe('DatePickerComponent', () => {
  it('should render a <ReactDatePicker /> component', () => {
    const wrapper = shallow(<DatePickerComponent />);
    expect(wrapper.find(ReactDatePicker)).toHaveLength(1);
  });

  it('matches Render snapshot', () => {
    const wrapper = shallow(<DatePickerComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
