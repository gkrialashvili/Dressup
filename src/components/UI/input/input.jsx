import React from "react";
import styles from './input.module.scss'

const Input = props => {
  return(
      <>
          <input className={styles.input}
                 id={props.id}
                 type='text'
                 disabled={props.disabled}
                 placeholder={props.placeholder}
                 value={props.value}
                 onChange={props.onChange}
          />
      </>
  )
};

export default Input;