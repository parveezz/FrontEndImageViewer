const FullSizeModel = ({ onClose, data }) => {

      console.log(data._id || null)
      return (
            <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center"

            >

                  {/* CLOSE BUTTON */}
                  <button className="absolute top-6 right-10 text-white text-2xl z-10 hover:bg-gray-200 rounded-full p-1 hover:text-black"
                        onClick={() => {
                              onClose();
                        }}
                  >
                        ✕
                  </button>

                  {/* IMAGE */}
                  <div className="w-full h-[95vh] m-6 ">
                        <section className=" h-full">
                              <div className="flex items-center justify-center">
                                    <img
                                          // src="/favicon.svg"
                                          src={`http://localhost:5000${data.imageUrl}`}
                                          alt="preview"
                                          className="h-[85vh] max-w-[90vw] object-cover "
                                    />
                              </div>
                              <div className="flex h-[10vh] items-center justify-between px-3 inset-0 z-[9999] bg-black/80">
                                    <span>
                                          <p className="text-white font-medium capitalize tracking-wider">{data.title}</p>
                                          <p className="text-white font-medium capitalize tracking-wider"> {data.description}</p>
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