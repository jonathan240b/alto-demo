import React, { useEffect, useState } from 'react';

import './App.css';
import Child from './Child'

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([])

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  })

  const loadData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    })

    if (response.status === 200) {
      setUsers(await response.json())
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <Child loadData={loadData}></Child>
        <br/>
        <button onClick={loadData}>
          Test JSON load
        </button>
        {users.length
          ? users.map((user) => <p key={user.id}>{user.name}</p>)
          : null}
      </header>

    </div>
  );
}

export default App;
