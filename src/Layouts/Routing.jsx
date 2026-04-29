import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import User from "../Components/Users/User";
import Dashboard from "../Components/DashboardComponent/Dashboard";
import Login from "../Components/Login&Landing/Login";
import Register from "../Components/Login&Landing/Register"
import Landing from "../Components/LandingPage/Landing"
import ProtectRoute from "./ProtectRoute";
import Images from "../Components/ImageComponent/Images"
import Videos from "../Components/VideoComponent/Videos"
import Profile from "../Components/ProfileComponent/Profile"
import Audio from "../Components/AudioComponent/Audio"
import MainLayout from "./MainLayout";



const Routing = () => {
      return (
            <Routes>
                  {/* Public Route */}
                  <Route path="/" element={<Landing />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />

                  {/* Protected Route */}
                  <Route element={<ProtectRoute />} >
                        <Route element={<MainLayout />}>
                              <Route path="/dashboard" element={<Dashboard />} />
                              <Route path="/user" element={<User />} />
                              <Route path="/images" element={<Images />} />
                              <Route path="/videos" element={<Videos />} />
                              <Route path="/audio" element={<Audio />} />
                              <Route path="/profile" element={<Profile />} />
                        </Route>
                  </Route>
            </Routes>
      );
};

export default Routing;