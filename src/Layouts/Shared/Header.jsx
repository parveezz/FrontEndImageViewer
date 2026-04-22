import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
      return (
            <header className="w-full flex justify-between items-center bg-[#5751531c] py-2 px-6">
                  <div>
                        <h2 className="font-bold text-lg tracking-wide ">Dashboard Overview</h2>
                        <p className="font-medium text-sm tracking-wide">Welcome back, Admin!</p>
                  </div>
                  <div className="flex items-center gap-3 ">
                        <Link to="/profile">
                              <div className="flex items-center gap-4 rounded-full border p-1 border-gray-600/55 hover:bg-gray-600/55 transition cursor-pointer">
                                    <img src="/Untitled.png" alt="Logo" className="w-10 h-10 rounded-full object-cover" />
                                    <p className="font-semibold text-sm tracking-wide pr-3">Admin</p>
                              </div>
                        </Link>
                        <button
                              type="button"
                              className="cursor-pointer transition hover:bg-gray-200 p-2 border rounded-3xl
                              flex items-center justify-center "
                              title="Logout"
                        >
                              <LogOut size={18} />
                        </button>
                  </div>
            </header>
      );
};

export default Header;