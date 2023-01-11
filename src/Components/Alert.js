import React from 'react';
import styles from './Alert.module.css';

function Alert(props) {
  const hideAlertHandler = function () {
    props.onHideAlert();
  };

  return (
    <div className={styles.alert} onClick={hideAlertHandler}>
      {props.children}
    </div>
  );
}

export default Alert;
