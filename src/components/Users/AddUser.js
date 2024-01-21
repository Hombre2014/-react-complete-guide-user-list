import React, { useState } from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const addUserHandler = (event) => {
    event.preventDefault();

    if (age === '' || userName === '') {
      console.log('Age: ', age, "UserName: ", userName);
      setIsOpen(true);
      console.log('isOpen: ', isOpen);
      return (
        <>
          {isOpen && <ErrorModal inputAlert={'Username and/or Age can not be empty!'} setIsOpen={true} />}
        </>
      )
    }

    const enteredAge = parseInt(age);
    if (enteredAge < 0) {
      return (
        <>
          {isOpen && <ErrorModal inputAlert={'Age must be > 0!'} setIsOpen={true} />}
        </>
      )
    }

    const userData = {
      userName,
      age
    }

    console.log("UserData: ", userData);
    props.onSaveUserData(userData);
    setAge('');
    setUserName('')
  }

  return (
    <Card>
      <form>
        <div className={styles.inner}>
          <label htmlFor="name" className={styles.label}>Username</label>
          <input type='text' name='name' className={styles.input} value={userName} onChange={(event) => setUserName(event.target.value)} />
          <label htmlFor="years" className={styles.label}>Age (years)</label>
          <input type='number' name='years' className={styles.input} value={age} onChange={(event) => setAge(event.target.value)} />
        </div>
        <Button type='submit' className={styles.add} onClick={addUserHandler}>
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
