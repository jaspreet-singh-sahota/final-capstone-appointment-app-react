import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/inputField.module.css';

const InputField = ({
  type, name, placeholder, value, handlerOnChange,
}) => (
  <>
    <input
      className={styles.input}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handlerOnChange}
      required
    />
  </>
);

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  handlerOnChange: PropTypes.func.isRequired,
};

InputField.defaultProps = {
  value: '.isRequired',
};

export default InputField;
