import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    // if button is clicked run the handler passed into the function
    <button className={classes.button} type={props.type || 'button'} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
