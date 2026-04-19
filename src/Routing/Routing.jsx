import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../Auth/Login";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../Components/Dashboard/Dashboard.jsx"
import Home from "../Pages/Home.jsx";


const Routing = () => {
      return (
            <Routes>
                  {/* Login */}
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />

                  {/* Protected Dashboard */}
                  <Route
                        path="/dashboard"
                        element={
                              <ProtectedRoute>
                                    <Dashboard />
                              </ProtectedRoute>
                        }
                  />
            </Routes>
      );
};

export default Routing;