import React from 'react';
import PropTypes from 'prop-types';
import cities from '../../redux/citiesData';
import StyledSelect from './styles/dropdown';
import './styles/dropdown.css';

const Dropdown = ({ setCity }) => {
  const onChange = e => {
    setCity(e[0].value);
  };

  return (
    <div>
      <StyledSelect style={{ textAlign: 'center', marginLeft: '20px' }} options={cities} onChange={value => onChange(value)} required placeholder="--Select City--" />
    </div>
  );
};

Dropdown.propTypes = {
  setCity: PropTypes.func,
};

Dropdown.defaultProps = {
  setCity: undefined,
};

export default Dropdown;
