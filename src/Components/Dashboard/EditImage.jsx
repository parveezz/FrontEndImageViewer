import React, { useState } from "react";
import { X, Save, Type, AlignLeft } from "lucide-react";
import { baseUrl } from "../../baseUrl";

const EditImage = ({ data, onClose }) => {
      const [title, setTitle] = useState(data?.title || "");
      const [description, setDescription] = useState(data?.description || "");

      return (
            <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
                  {/* 🔷 Lightened Backdrop: Lower opacity (bg-slate-900/30) and minimal blur (backdrop-blur-[2px]) */}
                  <div
                        className="absolute inset-0 bg-slate-900/30 backdrop-blur-[2px] transition-opacity"
                        onClick={onClose}
                  />

                  {/* 🔷 Modal - Uses 'max-w-4xl' and flex to reduce vertical height */}
                  <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">

                        {/* Compact Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white">
                              <h2 className="text-lg font-black text-slate-900 tracking-tight">Edit Asset</h2>
                              <button
                                    onClick={onClose}
                                    className="p-1.5 rounded-full text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all"
                              >
                                    <X className="w-5 h-5" />
                              </button>
                        </div>

                        {/* Body - 2 Column Layout to reduce height */}
                        <div className="flex flex-col md:flex-row">

                              {/* Left Side: Image Preview */}
                              <div className="w-full md:w-1/2 p-6 bg-slate-50/50">
                                    <div className="relative h-full min-h-[250px] max-h-[300px] rounded-xl overflow-hidden border border-slate-200 shadow-inner">
                                          <img
                                                src={data?.imageUrl ? `${baseUrl}${data.imageUrl}` : "https://via.placeholder.com/400"}
                                                alt="Preview"
                                                className="w-full h-full object-cover"
                                          />
                                    </div>
                              </div>

                              {/* Right Side: Form Fields */}
                              <div className="w-full md:w-1/2 p-6 space-y-4">
                                    <div className="space-y-1.5">
                                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Title</label>
                                          <div className="relative group">
                                                <Type className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-red-500 transition-colors" />
                                                <input
                                                      type="text"
                                                      value={title}
                                                      onChange={(e) => setTitle(e.target.value)}
                                                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 text-slate-900 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600/10 focus:border-red-600 transition-all"
                                                />
                                          </div>
                                    </div>

                                    <div className="space-y-1.5">
                                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Description</label>
                                          <div className="relative group">
                                                <AlignLeft className="absolute left-3 top-3 w-4 h-4 text-slate-300 group-focus-within:text-red-500 transition-colors" />
                                                <textarea
                                                      rows="4"
                                                      value={description}
                                                      onChange={(e) => setDescription(e.target.value)}
                                                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 text-slate-900 rounded-xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-red-600/10 focus:border-red-600 transition-all"
                                                ></textarea>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-100">
                              <button
                                    onClick={onClose}
                                    className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-700 transition-all"
                              >
                                    Cancel
                              </button>
                              <button
                                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-red-600 text-white text-xs font-black hover:bg-red-700 shadow-md shadow-red-100 transition-all active:scale-95"
                              >
                                    <Save className="w-3.5 h-3.5" />
                                    Save Changes
                              </button>
                        </div>
                  </div>
            </div>
      );
};

export default EditImage;