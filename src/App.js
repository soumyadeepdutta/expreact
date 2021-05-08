import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios"

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    async function getData(){
      await axios.get("/api/users").then(res => setUsers(res.data)).catch(ex => console.log(ex))
      // await fetch("/api/users").then(res => res.json()).then(data => console.log(data)).catch(ex => console.log(ex))
    }
    getData()
  }, [])
  return (
    <div className="App">
      <h1>Node serving react</h1>
      {users.map(user => <div key={user.email}><h3 >{user.name}</h3><span>{user.email}</span></div>)}
    </div>
  );
}

export default App;
