import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  /* NOT store data in cache */
  // const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  //   cache: { "no-store" },
  // });

  /* fetch new data every 10s to cache */
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const users: User[] = await res.json();

  return (
    <div>
      <p>UsersPage</p>
      {/* <p>{new Date().toLocaleTimeString()}</p> */}

      <h1>Users: </h1>
      <table className="">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
