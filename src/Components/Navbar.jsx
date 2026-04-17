
import UploadBox from "./UploadBox";
import { FaUpload } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = ({ getInputValue }) => {
      return (
            <>
                  <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4 ">
                        <div className="max-w-7xl mx-auto flex justify-between items-center relative ">
                              <h1 className="text-2xl font-black text-slate-800 font-[Dancing_Script]">
                                    Image
                                    <span className="text-blue-600 ">
                                          Viewer
                                    </span>
                              </h1>
                              <div className="flex items-center justify-end gap-3">
                                    <span className="relative w-full flex items-center justify-between">
                                          <input
                                                type="text"
                                                placeholder="Search..."
                                                className="w-[300px] pl-3 pr-11 py-2 text-md font-medium rounded-xl border border-gray-200 bg-white 
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
               transition-all duration-200"
                                                onChange={(e) => {
                                                      getInputValue(e.target.value)
                                                }}

                                          />

                                          {/* Search Icon */}
                                          <FiSearch className="absolute right-3 font-extrabold text-2xl cursor-pointer" />
                                    </span>

                                    <Link
                                          to="/dashboard"
                                          className="flex items-center gap-2 px-4 py-2 rounded-md 
             text-sm font-medium text-gray-700 
             transition-all duration-200
             hover:bg-gray-100 hover:text-blue-600"
                                    >
                                          <span className="tracking-wide">Dashboard</span>
                                    </Link>
                              </div>
                        </div>
                  </nav>


            </>
      );
};

export default Navbar;