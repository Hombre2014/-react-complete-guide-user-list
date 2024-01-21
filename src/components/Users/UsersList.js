import React from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css';

const UserList = (props) => {
  console.log("props: ", props);

  return (
    <Card>
      {props.users.map((user) =>
        <div key={Math.random()} className={styles.list}>
          <p className={styles.paragraph}>{user.userName} ({user.age} years old)</p>
        </div>)
      }
    </Card>
  )
}

export default UserList;
