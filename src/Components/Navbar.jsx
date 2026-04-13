import { useState } from "react";
import UploadBox from "./UploadBox";
import { FaUpload } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
      const [isUploadOpen, setIsUploadOpen] = useState(false);

      return (
            <>
                  <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4 z-999">
                        <div className="max-w-7xl mx-auto flex justify-between items-center">
                              <h1 className="text-2xl font-black text-slate-800">
                                    Image<span className="text-blue-600">Viewer</span>
                              </h1>
                              <div className="flex items-center justify-end gap-3">
                                    <span className="relative w-full flex items-center justify-between">
                                          <input
                                                type="text"
                                                placeholder="Search..."
                                                className="w-[300px] pl-3 pr-11 py-2 text-md font-medium rounded-xl border border-gray-200 bg-white 
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
               transition-all duration-200"


                                          />

                                          {/* Search Icon */}
                                          <FiSearch className="absolute right-3 font-extrabold text-2xl cursor-pointer" />
                                    </span>
                                    <button
                                          className="bg-blue-600 text-white px-2 py-2 rounded-full font-semibold"
                                          onClick={() => setIsUploadOpen(true)}
                                    >
                                          <FaUpload />
                                    </button>
                              </div>
                        </div>
                  </nav>

                  {isUploadOpen && (
                        <UploadBox onClose={() => setIsUploadOpen(false)} />
                  )}
            </>
      );
};

export default Navbar;