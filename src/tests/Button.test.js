import React from 'react';
import { shallow } from 'enzyme';
import Button from '../components/button/Button';

describe('Button', () => {
  it('should render a <button /> component', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('matches Render snapshot', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });
});
