import React, { useState } from "react";

const AddUser = () => {
  let [user, setUser] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("user added successfully");
        }
        e.target.reset();
      });
  };

  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };
  return (
    <div>
      <h2>Users:Add new users</h2>
      <form onSubmit={handleSubmit}>
        <input
          onBlur={handleInputBlur}
          type="text"
          name="name"
          placeholder="Name"
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="text"
          name="Address"
          placeholder="Address"
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="text"
          name="email"
          placeholder="Email"
        />
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
