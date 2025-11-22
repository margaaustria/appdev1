import { useState, useEffect } from "react";

export default function UsersFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading user data…</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Users List</h2>
      {users.map((user) => (
        <div key={user.id}>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
        </div>
      ))}
    </div>
  );
}
