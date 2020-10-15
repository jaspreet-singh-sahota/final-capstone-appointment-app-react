import React from 'react'
import styles from "./styles/inputField.module.css";

const InputField = ({type, name, placeholder, value, handlerOnChange}) => {
  return (
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
  )
}

export default InputField
