import { useState } from "react";
import UploadBox from "./UploadBox";

const Navbar = () => {
      const [uploadImage, setUploadImage] = useState(false);



      return (
            <>
                  <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4 relative">
                        <div class="max-w-7xl mx-auto flex justify-between items-center">

                              <div class="flex items-center gap-2 group cursor-pointer">
                                    <div class="bg-blue-600 p-1.5 rounded-lg transition-transform group-hover:rotate-12">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                          </svg>
                                    </div>
                                    <h1 class="text-2xl font-black tracking-tight text-slate-800">
                                          Image<span class="text-blue-600">Viewer</span>
                                    </h1>
                              </div>

                              <div class="flex items-center gap-4">


                                    <button class="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg shadow-blue-200 transition-all active:scale-95"
                                          onClick={() => {
                                                setUploadImage(true)
                                          }}
                                    >
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                          </svg>
                                          <span>Upload</span>
                                    </button>
                              </div>

                        </div>
                  </nav>
                  {uploadImage && <UploadBox
                        onClose={() => { setUploadImage(false) }}
                  />}
            </>
      );
};

export default Navbar;