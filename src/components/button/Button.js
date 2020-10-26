import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/button.module.css';

const Button = ({ children }) => (
  <>
    <button className={styles.button} type="submit">{children}</button>
  </>
);

Button.propTypes = {
  children: PropTypes.string,
};

Button.defaultProps = {
  children: '',
};

export default Button;
