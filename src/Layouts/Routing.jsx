import { Routes, Route } from "react-router-dom";

import Dashboard from "../Components/DashboardComponent/Dashboard";
import Images from "../Components/ImageComponent/Images";
import Videos from "../Components/VideoComponent/Videos";
import Audio from "../Components/AudioComponent/Audio";
import Profile from "../Components/ProfileComponent/Profile";


const Routing = () => {
      return (
            <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/images" element={<Images />} />
                  <Route path="/videos" element={<Videos />} />
                  <Route path="/audio" element={<Audio />} />
                  <Route path="/profile" element={<Profile />} />
            </Routes>
      );
};

export default Routing;