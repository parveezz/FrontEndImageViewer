import React from 'react';
import { X, CloudUpload, Upload } from 'lucide-react';

const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-800">Upload Video</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Drag & Drop Area */}
          <div className="border-2 border-dashed border-blue-100 rounded-xl p-10 flex flex-col items-center justify-center bg-blue-50/30 hover:bg-blue-50/50 transition-colors cursor-pointer group">
            <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <CloudUpload className="text-blue-400" size={28} />
            </div>
            <p className="text-sm font-bold text-gray-700 mb-1">Click to upload or drag and drop</p>
            <p className="text-xs text-gray-400 font-medium">MP4, MOV, or AVI (max. 2GB)</p>
          </div>

          {/* Form Fields */}
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Video Title</label>
              <input 
                type="text" 
                placeholder="e.g., Summer Campaign B-Roll"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-300 transition-all text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Description</label>
              <textarea 
                rows="4"
                placeholder="Provide a brief description of the video content..."
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-300 transition-all text-sm resize-none"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Category</label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-300 transition-all text-sm appearance-none cursor-pointer text-gray-500">
                <option>Select a category</option>
                <option>Marketing</option>
                <option>Tutorials</option>
                <option>Events</option>
                <option>Internal</option>
              </select>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50/50 px-6 py-4 flex items-center justify-end gap-3 border-t border-gray-100">
          <button 
            onClick={onClose}
            className="px-6 py-2 rounded-lg border border-gray-200 bg-white text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-lg text-sm font-bold transition-transform active:scale-95 shadow-md">
            <Upload size={16} />
            Upload Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
