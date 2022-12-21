import React from 'react';

const UsersList = (props) => {
  return (
    <div className='w-2/4 bg-white rounded-md p-4 flex mx-auto mt-12'>
      <ul>
        {props.listOfUsers.map(user => (
          <li key={user.username}>{user.username} {user.age} years old.</li>
          ))}
      </ul>
    </div>
  );
};

export default UsersList;
