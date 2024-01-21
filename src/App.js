import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UsersList';

function App() {
  const [userList, setUserList] = useState([]);

  const userDataHandler = (enteredUserData) => {
    setUserList((prev) => {
      return [enteredUserData, ...prev]
    });
  };

  return (
    <div>
      <AddUser onSaveUserData={userDataHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
