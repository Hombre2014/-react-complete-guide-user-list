import React from 'react';
import styles from './ErrorModal.module.css';
import Button from './Button';

const ErrorModal = (props) => {
  return (
    <div className={styles.darkBG} onClick={() => props.setIsOpen(false)}>
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>Invalid input</h2>
            </div>
            <p>{props.inputAlert}</p>
          </div>
          <div className={styles.modalFooter}>
            <Button onClick={() => props.setIsOpen(false)} className={styles.add} >
              Okay
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorModal;
