const FullSizeModel = () => {
      return (
            <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center">

                  {/* CLOSE BUTTON */}
                  <button className="absolute top-6 right-10 text-white text-2xl z-10">
                        ✕
                  </button>

                  {/* IMAGE */}
                  <div className="w-full h-[95vh] m-6">
                        <section className=" h-full bg-amber-300">
                              <img
                                    src="/favicon.svg"
                                    alt="preview"
                                    className="h-[85vh] max-w-[90vw] object-cover"
                              />
                              <div className="flex h-[10vh] items-center justify-between px-3 inset-0 z-[9999] bg-black/60">
                                    <span>
                                          <p className="text-white font-medium capitalize tracking-wider">title</p>
                                          <p className="text-white font-medium capitalize tracking-wider"> descripton</p>
                                    </span>
                                    <span className="flex items-center justify-end gap-3">
                                          <button type="button" className="bg-gray-50 p-2 rounded-xl font-extrabold capitalize hover:underline">favorite</button>
                                          <button type="button" className="bg-gray-50 p-2 rounded-xl font-extrabold capitalize hover:underline">Download</button>
                                    </span>
                              </div>
                        </section>

                  </div>

            </div>
      );
};

export default FullSizeModel;