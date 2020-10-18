import React from 'react';
import Button from '../components/button/Button';
import { shallow } from 'enzyme';

describe('Button', () => {
  it('should render a <button /> component', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('matches Render snapshot', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });
})
