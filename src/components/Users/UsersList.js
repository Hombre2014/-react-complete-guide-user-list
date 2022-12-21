import React from 'react';

const UsersList = (props) => {
  return (
    <div className='w-2/4 bg-white rounded-md flex mx-auto mt-12'>
      <ul className='w-full'>
        {props.listOfUsers.map(user => (
          <li key={user.username} className="mx-4 p-4 border border-solid border-slate-400 mb-4 font-bold my-4">{user.username} {user.age} years old.</li>
          ))}
      </ul>
    </div>
  );
};

export default UsersList;
