import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const storedUser = useLoaderData();
  let [user, setUser] = useState(storedUser);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    console.log(user);

    fetch(`http://localhost:5000/users/${storedUser._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("User Updated Successfully");
          e.target.reset();
        }
        console.log(data);
      });
  };

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };

  return (
    <div>
      <h2>This is update page</h2>
      <h2>Update: {user.name}</h2>

      <form onSubmit={handleUpdateUser}>
        <input
          onChange={handleInputChange}
          type="text"
          defaultValue={user.name}
          name="name"
          placeholder="Name"
        />
        <br />
        <input
          onChange={handleInputChange}
          type="email"
          defaultValue={user.email}
          name="email"
          placeholder="Enter Your Email"
        />
        <br />
        <input
          onChange={handleInputChange}
          type="text"
          defaultValue={user.Address}
          name="Address"
          placeholder="Enter Your Address"
        />
        <br />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default Update;
