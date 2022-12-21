import React, { useState } from 'react';
import UsersList from './components/Users/UsersList';
import AddUser from './components/Users/AddUser';

function App() {
  const [usersList, setUsersList] = useState([]);
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const addNewUserHandler = (newUser, newAge) => {
    setUsersList(prevList => {
      const updatedUsersList = [...prevList];
      updatedUsersList.unshift({ username: newUser, age: newAge });
      return updatedUsersList;
    })
  };

  const saveNewUserHandler = (enteredNewUser) => {
    setUsername(enteredNewUser.username);
    setAge(enteredNewUser.age);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-white mt-12">Users List</h1>
      <AddUser username={username} age={age} onNewUser={addNewUserHandler} onSaveNewUser={saveNewUserHandler} />
      <UsersList listOfUsers={usersList} />
    </div>
  );
}

export default App;
