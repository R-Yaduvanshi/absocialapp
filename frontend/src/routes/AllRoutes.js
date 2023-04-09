import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import UserForm from "../components/UserForm";
import PostForm from "../components/PostForm";
import UserList from "../components/UserList";
import PostList from "../components/PostList";
import UserAnalytics from "../components/UserAnalytics";
import PostAnalytics from "../components/PostAnalytics";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<UserForm />} />
      <Route path="post" element={<PostForm />} />
      <Route path="/seeallusers" element={<UserList />} />
      <Route path="/seeallpost" element={<PostList />} />
      <Route path="/useranalytics" element={<UserAnalytics />} />
      <Route path="/postanalytics" element={<PostAnalytics />} />
    </Routes>
  );
};

export default AllRoutes;
