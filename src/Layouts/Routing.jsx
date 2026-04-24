import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import User from "../Components/Users/user";
import Dashboard from "../Components/DashboardComponent/Dashboard";
import Login from "../Components/Login&Landing/Login";


const Routing = () => {
      return (
            <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/user" element={<User />} />
                  <Route path="/images" element={<Images />} />
                  <Route path="/videos" element={<Videos />} />
                  <Route path="/audio" element={<Audio />} />
                  <Route path="/profile" element={<Profile />} />
            </Routes>
      );
};

export default Routing;