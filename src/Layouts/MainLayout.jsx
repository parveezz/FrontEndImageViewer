import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MainLayout = () => {
      return (
            <div className="flex w-full h-screen overflow-hidden">
                  <Sidebar />
                  <div className="flex-1 overflow-auto bg-gray-50">
                        <Outlet />
                  </div>
            </div>
      );
};

export default MainLayout;