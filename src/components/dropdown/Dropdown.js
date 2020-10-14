import React from 'react'
import Select from 'react-dropdown-select'
import { cities } from '../../redux/citiesData'
import styles from "./styles/dropdown.css";
import styled from 'styled-components/macro'

const StyledSelect = styled(Select)`
 color: white !important;
    border: 1px solid white !important;
    border-radius: 20px !important;
    max-width: 180px;
    min-width: 150px
`


const Dropdown = ({setCity}) => {
  const onChange = e => {
    setCity(e[0].value);
  };

  return (
    <div>
      <StyledSelect style={{ textAlign: "center", marginLeft: '20px'}} options={cities}  onChange={value => onChange(value)} required placeholder='--Select City--' />
    </div>
  )
}

export default Dropdown
