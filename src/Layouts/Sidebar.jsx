import { NavLink } from "react-router-dom";
import {
      LayoutDashboard,
      Image,
      Video,
      Music,
      Settings,
} from "lucide-react";

const Sidebar = () => {
      const navLinks = [
            { name: "Dashboard", path: "/", icon: LayoutDashboard },
            { name: "Images", path: "/images", icon: Image },
            { name: "Videos", path: "/videos", icon: Video },
            { name: "Audio", path: "/audio", icon: Music },
      ];

      return (
            <aside className="bg-black text-white w-[260px] h-full flex flex-col p-4 gap-4">
                  {/* Title */}
                  <h2 className="text-xl font-bold py-4 text-center border-b border-gray-800/50 mb-4">
                        <NavLink to="/" className="flex items-center justify-center gap-2">
                              <span className="tracking-tight">MediaManager</span>
                        </NavLink>
                  </h2>

                  {/* Links */}
                  <div className="flex flex-col gap-2 flex-1">
                        {navLinks.map((link, index) => {
                              const Icon = link.icon;

                              return (
                                    <NavLink
                                          key={index}
                                          to={link.path}
                                          className={({ isActive }) =>
                                                `flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${isActive
                                                      ? "bg-white text-black font-semibold shadow-lg shadow-white/5"
                                                      : "text-gray-400 hover:bg-gray-800 hover:text-white"
                                                }`
                                          }
                                    >
                                          <Icon size={20} />
                                          <span className="text-sm">{link.name}</span>
                                    </NavLink>
                              );
                        })}
                  </div>

                  {/* Profile Section at Bottom */}
                  <div className="mt-auto pt-4 border-t border-gray-800/50">
                        <NavLink
                              to="/profile"
                              className={({ isActive }) =>
                                    `flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group ${isActive ? "bg-gray-800 ring-1 ring-gray-700" : "hover:bg-gray-800"
                                    }`
                              }
                        >
                              <div className="relative">
                                    <img
                                          src="/Untitled.png"
                                          alt="Admin"
                                          className="w-10 h-10 rounded-full object-cover border-2 border-gray-700 group-hover:border-gray-500 transition-colors"
                                    />
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-black rounded-full"></div>
                              </div>
                              <div className="flex flex-col min-w-0">
                                    <span className="text-sm font-bold truncate">Profile</span>
                              </div>
                              <Settings size={16} className="ml-auto text-gray-500 group-hover:text-white transition-colors" />
                        </NavLink>
                  </div>
            </aside>
      );
};

export default Sidebar;
