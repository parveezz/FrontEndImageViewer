import { useState } from "react";
import toast from "react-hot-toast";
import { Upload, X, ImageIcon, FileText, Type } from "lucide-react"; // Added for better icons
import { baseUrl } from "../../baseurl";

const UploadBox = ({ onClose, updateApi }) => {
      const [title, setTitle] = useState("");
      const [description, setDescription] = useState("");
      const [image, setImage] = useState(null);

      // Note: validation() call removed from top-level to prevent infinite loops/errors
      const validation = () => {
            if (title.length === 0) { toast.error("Title is required"); return false; }
            if (description.length === 0) { toast.error("Description is required"); return false; }
            if (!image) { toast.error("Please select an image"); return false; }
            return true;
      };

      const uploadImage = async () => {
            if (!validation()) return;
            try {
                  const url = `${baseUrl}/api/images`;
                  const imageUpload = new FormData();
                  imageUpload.append("title", title);
                  imageUpload.append("description", description);
                  imageUpload.append("image", image);

                  const response = await fetch(url, {
                        method: "POST",
                        body: imageUpload
                  });

                  if (response.ok) { // Changed to .ok for standard fetch
                        toast.success("Successfully Uploaded");
                        onClose();
                  } else {
                        toast.error("Something Went Wrong");
                  }
            } catch (e) {
                  console.log(e);
            }
      };

      return (
            <div className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4">
                  <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 transition-all">

                        {/* HEADER */}
                        <div className="bg-slate-50 px-8 py-6 border-b border-slate-100 flex justify-between items-center">
                              <div>
                                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">Upload Asset</h2>
                                    <p className="text-slate-500 text-sm font-medium">Add a new image to your gallery</p>
                              </div>
                              <button
                                    onClick={onClose}
                                    className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all"
                              >
                                    <X className="w-6 h-6" />
                              </button>
                        </div>

                        <div className="p-8 space-y-6">
                              {/* UPLOAD AREA */}
                              <label className={`relative group flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-2xl cursor-pointer transition-all overflow-hidden ${image ? 'border-red-500 bg-red-50/10' : 'border-slate-200 hover:border-red-500 hover:bg-slate-50'}`}>

                                    {!image ? (
                                          <div className="flex flex-col items-center justify-center space-y-3">
                                                <div className="p-4 bg-slate-100 rounded-2xl group-hover:bg-red-100 transition-colors">
                                                      <Upload className="w-8 h-8 text-slate-400 group-hover:text-red-600" />
                                                </div>
                                                <div className="text-center">
                                                      <p className="text-sm text-slate-600"><span className="font-bold text-red-600">Click to upload</span> or drag</p>
                                                      <p className="text-xs text-slate-400 mt-1 uppercase tracking-tighter font-bold">PNG, JPG up to 10MB</p>
                                                </div>
                                          </div>
                                    ) : (
                                          <div className="flex items-center gap-4 px-6">
                                                <div className="p-3 bg-red-600 rounded-xl">
                                                      <ImageIcon className="w-8 h-8 text-white" />
                                                </div>
                                                <div className="text-left">
                                                      <p className="text-slate-900 font-bold truncate max-w-[200px]">{image.name}</p>
                                                      <p className="text-red-600 text-xs font-bold">Image selected ✓</p>
                                                </div>
                                          </div>
                                    )}

                                    <input
                                          type="file"
                                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                          onChange={(e) => setImage(e.target.files[0])}
                                    />
                              </label>

                              {/* FORM FIELDS */}
                              <div className="space-y-4">
                                    <div className="relative group">
                                          <Type className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-red-600 transition-colors" />
                                          <input
                                                type="text"
                                                placeholder="Asset Title"
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all font-medium"
                                          />
                                    </div>

                                    <div className="relative group">
                                          <FileText className="absolute left-4 top-4 w-4 h-4 text-slate-400 group-focus-within:text-red-600 transition-colors" />
                                          <textarea
                                                rows="3"
                                                placeholder="Brief description..."
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl resize-none placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all font-medium"
                                          ></textarea>
                                    </div>
                              </div>

                              {/* ACTION BUTTONS */}
                              <div className="flex gap-3 pt-2">
                                    <button
                                          onClick={onClose}
                                          className="flex-1 px-4 py-4 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-all active:scale-95"
                                    >
                                          Cancel
                                    </button>
                                    <button
                                          onClick={() => {
                                                if (uploadImage()) {
                                                      updateApi();
                                                }
                                          }}
                                          className="flex-[2] bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-red-200 active:scale-95"
                                    >
                                          Confirm Upload
                                    </button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default UploadBox;