import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddUser from "./components/addUser";
import Home from "./components/Home";
import Update from "./components/Update";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      loader: () => fetch("http://localhost:5000/users"),
      element: <Home></Home>,
    },
    {
      path: "/users/add",
      loader: () => fetch("http://localhost:5000/users"),
      element: <AddUser></AddUser>,
    },
    {
      path: "/update/:id",
      loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
      element: <Update></Update>,
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
