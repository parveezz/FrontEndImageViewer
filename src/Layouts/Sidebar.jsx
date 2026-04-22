import { NavLink } from "react-router-dom";
import {
      LayoutDashboard,
      Image,
      Video,
      Music,
      User,
} from "lucide-react";

const Sidebar = () => {
      const navLinks = [
            { name: "Dashboard", path: "/", icon: LayoutDashboard },
            { name: "Images", path: "/images", icon: Image },
            { name: "Videos", path: "/videos", icon: Video },
            { name: "Audio", path: "/audio", icon: Music },
            { name: "Profile", path: "/profile", icon: User },
      ];

      return (
            <aside className="bg-black text-white w-[260px] h-full flex flex-col p-3 gap-4">
                  {/* Title */}
                  <h2 className="text-lg font-semibold py-3 text-center">
                        <NavLink to="/" >
                              <span>
                                    Media Manager
                                    <i className="fa-solid fa-house"></i>
                              </span>
                        </NavLink>
                  </h2>

                  {/* Links */}
                  <div className="flex flex-col gap-2">
                        {navLinks.map((link, index) => {
                              const Icon = link.icon;

                              return (
                                    <NavLink
                                          key={index}
                                          to={link.path}
                                          className={({ isActive }) =>
                                                `flex items-center gap-3 p-3 rounded-lg transition ${isActive ? "bg-gray-800" : "hover:bg-gray-800"
                                                }`
                                          }
                                    >
                                          <Icon size={18} />
                                          <span>{link.name}</span>
                                    </NavLink>
                              );
                        })}
                  </div>
            </aside>
      );
};

export default Sidebar;