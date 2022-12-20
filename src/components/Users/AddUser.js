import React from 'react';
import Button from '../UI/Button';

const AddUser = () => {
  return (
    <div className="w-2/4 bg-white rounded-md p-4 flex mx-auto mt-12">
      <form className='flex flex-col w-full'>
        <label htmlFor='Username' className='font-bold'>Username</label>
        <input type='text' title='username' placeholder='Enter Username' id='username' className='p-2 border border-solid border-slate-400' />
        <label htmlFor='Age' className='mt-4 font-bold'>Age (Years)</label>
        <input type='number' if='age' title='age' placeholder='Age in years' className='p-2 border border-solid border-slate-400' />
        <Button type='submit'>Add User</Button>
      </form>
    </div>
  )
}

export default AddUser;
