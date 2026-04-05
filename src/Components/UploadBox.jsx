const UploadBox = ({ onClose }) => {
      return (
            <div
                  className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                  onClick={onClose}
            >

                  {/* CLOSE BUTTON */}
                  <button
                        className="absolute top-6 right-6 text-white/60 hover:text-white transition"
                        onClick={onClose}
                  >
                        ✕
                  </button>

                  {/* MODAL BOX */}
                  <div
                        className="w-full max-w-md max-h-[90vh] overflow-y-auto bg-[#141414] p-6 md:p-10 rounded-3xl shadow-2xl border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                  >

                        <h2 className="text-3xl font-black text-white mb-8 tracking-tight">
                              Upload <span className="text-red-600">Media</span>
                        </h2>

                        {/* Upload Area */}
                        <div className="border-2 border-dashed border-white/10 rounded-2xl p-8 text-center hover:border-red-600 transition cursor-pointer">
                              <p className="text-white font-semibold mb-2">Drop your file</p>
                              <p className="text-white/40 text-xs mb-4">HD • 4K supported</p>
                              <input type="file" className="w-full opacity-0 absolute inset-0 cursor-pointer" />
                              <button className="text-red-500 text-sm font-bold">Browse</button>
                        </div>

                        {/* Inputs */}
                        <div className="mt-6 flex flex-col gap-4">
                              <input
                                    type="text"
                                    placeholder="Title"
                                    className="bg-white/5 border border-white/10 p-3 rounded-xl text-white outline-none focus:ring-2 focus:ring-red-500"
                              />

                              <textarea
                                    placeholder="Description"
                                    rows="3"
                                    className="bg-white/5 border border-white/10 p-3 rounded-xl text-white outline-none focus:ring-2 focus:ring-red-500 resize-none"
                              ></textarea>
                        </div>

                        {/* Button */}
                        <button className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition">
                              Upload Now
                        </button>

                  </div>
            </div>
      );
};

export default UploadBox;