import React from 'react';
import Card from './components/UI/Card';
import UsersList from './components/Users/UsersList';

function App() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-white mt-12">Users List</h1>
      <Card>
        <UsersList>
          <li>Max (28 years old)</li>
        </UsersList>
      </Card>
    </div>
  );
}

export default App;
