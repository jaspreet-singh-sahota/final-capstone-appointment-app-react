import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from '../components/dropdown/Dropdown';
import StyledSelect from '../components/dropdown/styles/dropdown';

describe('Dropdown', () => {
  it('should render a <StyledSelect /> component', () => {
    const wrapper = shallow(<Dropdown />);
    expect(wrapper.find(StyledSelect)).toHaveLength(1);
  });

  it('matches Render snapshot', () => {
    const wrapper = shallow(<Dropdown />);
    expect(wrapper).toMatchSnapshot();
  });
});
