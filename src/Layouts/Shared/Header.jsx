import { LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ heading, subtitle }) => {
      const navigate = useNavigate();

      // Correctly get stored user data
      const userData = JSON.parse(localStorage.getItem("UserData")) || {};
      const userName = userData.name;
      console.log(userName)

      const removingToken = () => {
            localStorage.removeItem("BearerToken");
            localStorage.removeItem("UserData");
            navigate("/login", { replace: true });
      };

      return (
            <header className="w-full flex justify-between items-center bg-[#5751531c] py-2 px-6">

                  {/* Left Side */}
                  <div>
                        <h2 className="font-bold text-lg tracking-wide">
                              {heading}
                        </h2>

                        <p className="font-medium text-sm tracking-wide">
                              {subtitle}
                        </p>
                  </div>

                  {/* Right Side */}
                  <div className="flex items-center gap-3">

                        {/* Profile */}
                        <Link to="/profile">
                              <div className="flex items-center gap-4 rounded-full border p-1 border-gray-600/55 hover:bg-gray-600/10 transition cursor-pointer">

                                    <img
                                          src="/Untitled.png"
                                          alt="Logo"
                                          className="w-10 h-10 rounded-full object-cover"
                                    />

                                    <div className="flex flex-col pr-3">
                                          <b className="text-[8px] text-black uppercase tracking-wider">
                                                {userName}
                                          </b>

                                          <p className="font-semibold text-sm tracking-wide text-black">
                                                Admin
                                          </p>
                                    </div>

                              </div>
                        </Link>

                        {/* Logout */}
                        <button
                              type="button"
                              onClick={removingToken}
                              title="Logout"
                              className="cursor-pointer transition hover:bg-gray-200 p-2 border rounded-3xl flex items-center justify-center"
                        >
                              <LogOut size={18} />
                        </button>

                  </div>
            </header>
      );
};

export default Header;