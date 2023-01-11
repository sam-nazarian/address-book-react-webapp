import React, { useState } from 'react';
import Alert from './Alert';

const Form = (props) => {
  const [fname, setFname] = useState('');
  const [age, setAge] = useState('');
  const [alert, setAlert] = useState('');

  const fnameHandler = function (e) {
    setFname(e.target.value);
  };

  const ageHandler = function (e) {
    setAge(e.target.value);
  };

  const hideAlertHandler = function (e) {
    setAlert('');
  };

  const submitHandler = function (e) {
    e.preventDefault();

    if (fname.trim() === '') {
      setAlert(<Alert onHideAlert={hideAlertHandler}>A first name is required</Alert>);
      return;
    }

    props.onAddData({ name: fname, age: age, key: Math.random().toString() });

    setAge('');
    setFname('');
  };

  return (
    <form onSubmit={submitHandler}>
      {alert}
      <label htmlFor="fname">Name:</label>
      <input type="text" value={fname} id="fname" name="fname" onChange={fnameHandler} />
      <br />

      <label htmlFor="age">Age:</label>
      <input type="text" value={age} id="age" name="age" onChange={ageHandler} />
      <br />

      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
