import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Skeleton from "../Components/Shared/Skeleton";

const Dashboard = lazy(() => import("../Components/DashboardComponent/Dashboard"));
const Images = lazy(() => import("../Components/ImageComponent/Images"));
const Videos = lazy(() => import("../Components/VideoComponent/Videos"));
const Audio = lazy(() => import("../Components/AudioComponent/Audio"));
const Profile = lazy(() => import("../Components/ProfileComponent/Profile"));


const Routing = () => {
      return (
            <Suspense fallback={<Skeleton />}>
                  <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/images" element={<Images />} />
                        <Route path="/videos" element={<Videos />} />
                        <Route path="/audio" element={<Audio />} />
                        <Route path="/profile" element={<Profile />} />
                  </Routes>
            </Suspense>
      );
};

export default Routing;