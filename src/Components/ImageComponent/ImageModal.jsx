import React, { useState, useRef } from 'react';
import { X, ImagePlus, Upload, Tag as TagIcon } from 'lucide-react';

const ImageModal = ({ isOpen, onClose }) => {
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };


  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm cursor-pointer"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-800">Upload Image</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto custom-scrollbar">
          {/* Upload Area */}
          <div 
            onClick={handleUploadClick}
            className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer group"
          >
            <input 
              type="file" 
              ref={fileInputRef}
              className="hidden" 
              accept="image/*"
              onChange={(e) => console.log(e.target.files[0])}
            />
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ImagePlus className="text-gray-400" size={24} />
            </div>
            <p className="text-sm font-bold text-gray-700 mb-1">Click to upload or drag and drop</p>
            <p className="text-xs text-gray-400 font-medium">SVG, PNG, JPG or WEBP (max. 10MB)</p>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Title</label>
              <input
                type="text"
                placeholder="e.g. Modern Architecture Hero"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50/30 focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-300 transition-all text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Description</label>
              <textarea
                rows="3"
                placeholder="Add a brief description of the image..."
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50/30 focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-300 transition-all text-sm resize-none"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Category</label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50/30 focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-300 transition-all text-sm appearance-none cursor-pointer text-gray-500">
                <option>Select a category...</option>
                <option>Architecture</option>
                <option>Nature</option>
                <option>Marketing</option>
                <option>Abstract</option>
              </select>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50/50 px-8 py-6 flex items-center justify-end gap-3 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg border border-gray-200 bg-white text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button className="flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-transform active:scale-95 shadow-md">
            <Upload size={16} />
            Upload Asset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
