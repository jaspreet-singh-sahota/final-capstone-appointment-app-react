import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import App from '../App';
import Navbar from '../components/navbar/Navbar';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

describe('App', () => {
  it('should render a <HomePage /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#HomePage')).toHaveLength(1);
  });

  it('should render a <Navbar /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Navbar)).toHaveLength(1);
  });

  it('should render a <LogInPage /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#LogInPage')).toHaveLength(1);
  });

  it('should render a <SignInPage /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#SignInPage')).toHaveLength(1);
  });

  it('should render a <FacilityShowPage /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#FacilityShowPage')).toHaveLength(1);
  });

  it('should render a <AppointmentsPage /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#AppointmentsPage')).toHaveLength(1);
  });

  it('should render a routes', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Route)).toHaveLength(5);
  });

  it('should render a BrowserRouter', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(BrowserRouter)).toHaveLength(1);
  });

  it('should render a Switch', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Switch)).toHaveLength(1);
  });

  it('matches Render snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
