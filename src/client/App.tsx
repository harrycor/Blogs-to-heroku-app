import * as React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import AllBlogs from "./pages/AllBlogs";
import BlogDescription from "./pages/BlogDescription";
import EditForm from "./pages/EditForm";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewPost from "./pages/NewPost";
import NewUser from "./pages/NewUser";
import PersonalBlogs from "./pages/PersonalBlogs";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/allblogs"
          element={
            <PrivateRoute>
              <AllBlogs />
            </PrivateRoute>
          }
        />
        <Route
          path="/blog/description/:id"
          element={
            <PrivateRoute>
              <BlogDescription />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit/blog/:id"
          element={
            <PrivateRoute>
              <EditForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/newpost"
          element={
            <PrivateRoute>
              <NewPost />
            </PrivateRoute>
          }
        />
        <Route
          path="/personalblogs"
          element={
            <PrivateRoute>
              <PersonalBlogs />
            </PrivateRoute>
          }
        />
        <Route path="/newuser" element={<NewUser />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
