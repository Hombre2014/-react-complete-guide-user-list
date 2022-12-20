import React, { useState } from 'react';
import UsersList from './components/Users/UsersList';
import AddUser from './components/Users/AddUser';

function App() {
  const [usersList, setUsersList] = useState({username:"", age:''});
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const addNewUserHandler = (newUser, newAge) => {
    const updatedUsersList = { username: newUser, age: newAge };
    setUsersList(usersList => ({
      ...usersList,
      ...updatedUsersList}));
      console.log(updatedUsersList);
      
      console.log(newUser, newAge);
      return updatedUsersList;
    };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-white mt-12">Users List</h1>
      <AddUser username={username} age={age} onNewUser={addNewUserHandler} />
      <UsersList listOfUsers={usersList} />
    </div>
  );
}

export default App;
