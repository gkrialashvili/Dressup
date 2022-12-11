import React, { useState, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.scss';
import Button from '../UI/Button/Button';
import Frame from '../../assets/images/Frame.png'

const Login = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [nameIsValid, setNameIsValid] = useState();
  const [enteredNumber, setEnteredNumber] = useState('');
  const [numberIsValid, setNumberIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  const nameChangeHandler = (event) => {

    const re = /^[a-zA-Z\s]*$/;
    if (event.target.value === '' || re.test(event.target.value)) {
      setEnteredName(event.target.value);
    }

    setFormIsValid(
        enteredName.trim().length > 0 && enteredNumber.includes(' ')
    );
  };

  const numberChangeHandler = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setEnteredNumber(e.target.value);
    }

    setFormIsValid(
        enteredNumber.trim().length > 6
    );
  };

  const validateNameHandler = () => {
    setNameIsValid(enteredName.trim().length > 0) && enteredNumber.includes(' ');
  };

  const validateNumberHandler = () => {
    setNumberIsValid(enteredNumber.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredName, enteredNumber);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <img src={Frame} alt='' />
        <div
          className={`${classes.control} ${
            nameIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="name">სახელი გვარი</label>
          <input
              placeholder='სახელი გვარი'
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={validateNameHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            numberIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="cardNumber">ბარათის ნომერი</label>
          <input
              placeholder='ბარათის ნომერი'
            type="text"
            id="cardNumber"
            value={enteredNumber}
            onChange={numberChangeHandler}
            onBlur={validateNumberHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
