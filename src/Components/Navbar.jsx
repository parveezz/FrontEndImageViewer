import { useState, useEffect } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = ({ getInputValue }) => {
      const [input, setInput] = useState("");

      // 🔥 Debounce (better performance)
      useEffect(() => {
            const delay = setTimeout(() => {
                  getInputValue(input);
            }, 300);

            return () => clearTimeout(delay);
      }, [input]);

      return (
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
                  <div className="max-w-7xl mx-auto flex justify-between items-center">

                        {/* Logo */}
                        <h1 className="text-2xl font-black text-slate-800 font-[Dancing_Script]">
                              Image <span className="text-blue-600">Viewer</span>
                        </h1>

                        {/* Right Side */}
                        <div className="flex items-center gap-3">

                              {/* 🔍 Search */}
                              <div className="relative w-[220px] sm:w-[300px]">

                                    <input
                                          type="text"
                                          value={input}
                                          placeholder="Search..."
                                          onChange={(e) => setInput(e.target.value)}
                                          className="w-full pl-3 pr-10 py-2 text-sm font-medium rounded-xl border border-gray-200 bg-white 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    />

                                    {/* Search Icon */}
                                    <FiSearch className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-400" />

                                    {/* Clear Button */}
                                    {input && (
                                          <FiX
                                                onClick={() => setInput("")}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-red-500"
                                          />
                                    )}
                              </div>

                              {/* Dashboard Link */}
                              <Link
                                    to="/login"
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl 
            text-sm font-medium text-gray-700 
            hover:bg-gray-100 hover:text-blue-600 transition"
                              >
                                    Dashboard
                              </Link>

                        </div>
                  </div>
            </nav>
      );
};

export default Navbar;