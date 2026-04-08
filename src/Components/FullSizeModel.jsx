import { HiHeart, HiDownload } from "react-icons/hi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const FullSizeModel = ({ onClose, data }) => {
      return (
            <>
                  <div className="fixed inset-0 z-999 bg-black/80 backdrop-blur-md flex flex-col">

                        {/* CLOSE BUTTON */}
                        <button
                              className="absolute top-6 right-10 text-white text-3xl z-10 hover:bg-white hover:text-black rounded-full p-2 transition"
                              onClick={onClose}
                        >
                              ✕
                        </button>

                        {/* MAIN CONTENT */}
                        <div className="flex-1 flex items-center justify-center relative px-6">

                              {/* LEFT ARROW */}
                              <FiChevronLeft className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-6xl cursor-pointer hover:scale-125 transition duration-200" />

                              {/* IMAGE */}
                              <div className="flex items-center justify-center">
                                    <img
                                          src={`http://localhost:5000${data.imageUrl}`}
                                          alt="preview"
                                          className="max-h-[80vh] max-w-full object-cover "
                                    />
                              </div>

                              {/* RIGHT ARROW */}
                              <FiChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-6xl cursor-pointer hover:scale-125 transition duration-200" />
                        </div>

                        {/* BOTTOM TEXT SECTION */}
                        <div className="h-[12vh] bg-black/80 flex items-center justify-between px-6">

                              {/* TEXT */}
                              <div>
                                    <p className="text-white text-lg font-semibold tracking-wide">
                                          {data.title}
                                    </p>
                                    <p className="text-gray-300 text-sm mt-1">
                                          {data.description}
                                    </p>
                              </div>

                              {/* ACTION BUTTONS */}
                              <div className="flex gap-4">
                                    {/* Favorite Button: Solid White with a Heart */}
                                    <button className="group flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-xl font-bold shadow-lg hover:bg-red-50 hover:text-red-600 transition-all duration-300 active:scale-95">
                                          <HiHeart className="text-xl group-hover:scale-125 transition-transform duration-300" />
                                          <span>Favorite</span>
                                    </button>

                                    {/* Download Button: Glassmorphism Style */}
                                    <button className="flex items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-2.5 rounded-xl font-bold hover:bg-white/20 transition-all duration-300 active:scale-95">
                                          <HiDownload className="text-xl" />
                                          <span>Download</span>
                                    </button>
                              </div>

                        </div>
                  </div>
            </>
      );
};

export default FullSizeModel;