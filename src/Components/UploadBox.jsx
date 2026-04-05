import { useState } from "react";

const UploadBox = ({ onClose }) => {
      const [title, setTitle] = useState("");
      const [description, setDescription] = useState("");
      const [image, setImage] = useState([]);

      const uploadImage = async () => {
            try {
                  const url = "http://localhost:5000/api/images";

                  //create the image uploader 
                  const imageUpload = new FormData();
                  imageUpload.append("title", title);
                  imageUpload.append("description", description);
                  imageUpload.append("image", image)
                  const response = await fetch(url, {
                        method: "POST",
                        body: imageUpload
                  });
                  const data = await response.json();
                  console.log(data);
            } catch (e) {
                  console.log(e);
            }
      };

      return (
            <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4"

            >

                  <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 space-y-5"

                  >

                        {/* CLOSE BUTTON */}
                        <button
                              onClick={(e) => {
                                    e.stopPropagation();
                                    onClose();
                              }}
                              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors z-10"
                        >
                              ✕
                        </button>

                        {/* TITLE */}
                        <div className="text-center">
                              <h2 className="text-xl font-bold text-slate-800">Upload Image</h2>
                              <p className="text-sm text-slate-500">PNG, JPG or GIF up to 10MB</p>
                        </div>

                        {/* UPLOAD AREA */}
                        <label className="relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all">

                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <p className="text-sm text-slate-600">
                                          <span className="font-semibold">Click to upload</span> or drag and drop
                                    </p>
                              </div>

                              <input
                                    type="file"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    onChange={(e) => {
                                          const file = e.target.files[0]
                                          setImage(file)
                                    }}
                              />
                        </label>

                        {/* INPUTS */}
                        <input
                              type="text"
                              placeholder="Title"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl"
                        />

                        <textarea
                              rows="3"
                              placeholder="Description"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl resize-none"
                        ></textarea>

                        {/* BUTTON */}
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl"
                              onClick={() => {
                                    uploadImage()
                                    onClose();
                              }}
                        >
                              Save Details
                        </button>
                  </div>
            </div>
      );
};

export default UploadBox;