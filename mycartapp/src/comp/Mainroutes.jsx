import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Profile";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/:category"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default MainRoutes;
