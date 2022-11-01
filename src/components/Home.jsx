import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const userData = useLoaderData();

  const [displayUsers, setDisplayUsers] = useState(userData);

  const handleDelet = (user) => {
    const agree = window.confirm(
      `Are you sure !you want to delet ${user.name}`
    );
    console.log(agree);
    if (agree) {
      //

      fetch(`http://localhost:5000/users/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.deletedCount > 0) {
            alert("user deleted successfully");
            const remainingUser = displayUsers.filter(
              (usr) => usr._id !== user._id
            );
            console.log(remainingUser);
            setDisplayUsers(remainingUser);
          }
        });
    }
  };
  return (
    <div>
      <h1>Total users: {displayUsers.length}</h1>
      {displayUsers.map((user) => (
        <div key={user._id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <span>{user.address}</span>
          <Link to={`/update/${user._id}`}>
            <button>Update</button>
          </Link>
          <button onClick={() => handleDelet(user)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
