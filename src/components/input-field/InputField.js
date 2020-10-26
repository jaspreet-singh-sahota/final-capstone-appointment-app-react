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
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handlerOnChange: PropTypes.func,
};

InputField.defaultProps = {
  type: 'submit',
  name: '',
  placeholder: '',
  value: '',
  handlerOnChange: undefined,
};

export default InputField;
