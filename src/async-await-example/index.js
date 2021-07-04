import axios from "axios";
import React, { useEffect, useState } from "react";
import { formatUsername } from "./formatUsername";
function Test2() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    let mounted = true;
    const getUsers = async () => {
      try {
        const users = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (mounted) setUsers(users.data);
      } catch (e) {
        setError(true);
      }
    };
    getUsers();
    return () => {
      mounted = false;
    };
  }, []);
  if (error) return <p role="alert">Internal Server Error</p>;
  if (!users.length) return <div>Loading...</div>;
  return (
    <ul>
      Users:
      {users.map((user) => (
        <li key={user.id}>
          {user.name} ({formatUsername(user.username)})
        </li>
      ))}
    </ul>
  );
}

export default Test2;
