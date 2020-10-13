import React from 'react'
import Select from 'react-dropdown-select'
import { cities } from '../../redux/citiesData'

const Dropdown = ({setCity}) => {
  const onChange = e => {
    setCity(e[0].value);
  };

  return (
    <div>
      <Select options={cities} onChange={value => onChange(value)} required placeholder='--Select City--' />
    </div>
  )
}

export default Dropdown
