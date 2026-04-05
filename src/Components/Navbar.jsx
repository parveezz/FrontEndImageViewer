import { useState } from "react";
import UploadBox from "./UploadBox";

const Navbar = () => {
      const [isUploadOpen, setIsUploadOpen] = useState(false);

      return (
            <>
                  <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
                        <div className="max-w-7xl mx-auto flex justify-between items-center">
                              <h1 className="text-2xl font-black text-slate-800">
                                    Image<span className="text-blue-600">Viewer</span>
                              </h1>
                              <button
                                    className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold"
                                    onClick={() => setIsUploadOpen(true)}
                              >
                                    Upload
                              </button>
                        </div>
                  </nav>

                  {isUploadOpen && (
                        <UploadBox onClose={() => setIsUploadOpen(false)} />
                  )}
            </>
      );
};

export default Navbar;