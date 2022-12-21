import React, { useState } from 'react';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [newUser, setNewUser] = useState('');
  const [newAge, setNewAge] = useState('');

  const submitHandler = event => {
    event.preventDefault();
    props.onNewUser(newUser, newAge);
    const enteredNewUser = {
      username: newUser,
      age: newAge
    };

    props.onSaveNewUser(enteredNewUser);
    setNewUser('');
    setNewAge('');
  }

  const usernameChangeHandler = event => {
    setNewUser(event.target.value);
  }

  const ageChangeHandler = event => {
    setNewAge(event.target.value);
  }

  return (
    <div className="w-2/4 bg-white rounded-md p-4 flex mx-auto mt-12">
      <form className='flex flex-col w-full' onSubmit={submitHandler}>
        <label htmlFor='Username' className='font-bold'>Username</label>
        <input type='text' title='username' value={newUser} onChange={usernameChangeHandler} placeholder='Enter Username' id='username' className='p-2 border border-solid border-slate-400' />
        <label htmlFor='Age' className='mt-4 font-bold'>Age (Years)</label>
        <input type='number' id='age' value={newAge} title='age' onChange={ageChangeHandler} placeholder='Age in years' className='p-2 border border-solid border-slate-400' />
        <Button type='submit' />
      </form>
      <ErrorModal />
    </div>
  )
}

export default AddUser;
