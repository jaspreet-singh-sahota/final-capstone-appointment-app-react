import React from 'react';
import { shallow } from 'enzyme';
import InputField from '../components/input-field/InputField';

describe('InputField', () => {
  it('should render a <input /> field', () => {
    const wrapper = shallow(<InputField />);
    expect(wrapper.find('input')).toHaveLength(1);
  });

  it('matches Render snapshot', () => {
    const wrapper = shallow(<InputField />);
    expect(wrapper).toMatchSnapshot();
  });
});
