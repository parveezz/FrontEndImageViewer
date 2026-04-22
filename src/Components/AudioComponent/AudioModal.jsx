import React from 'react';
import { X, Music, Upload } from 'lucide-react';

const AudioModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-800">Upload Audio Track</h2>
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
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer group">
            <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Music className="text-purple-500" size={24} />
            </div>
            <p className="text-sm font-semibold text-gray-700 mb-1">Click to upload or drag and drop</p>
            <p className="text-xs text-gray-400 font-medium">MP3, WAV, AAC, or OGG (max. 50MB)</p>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Track Title</label>
              <input 
                type="text" 
                placeholder="Enter track title..."
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50/30 focus:outline-none focus:ring-2 focus:ring-purple-500/10 focus:border-purple-300 transition-all text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Artist</label>
                <input 
                  type="text" 
                  placeholder="Enter artist name..."
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50/30 focus:outline-none focus:ring-2 focus:ring-purple-500/10 focus:border-purple-300 transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Category</label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50/30 focus:outline-none focus:ring-2 focus:ring-purple-500/10 focus:border-purple-300 transition-all text-sm appearance-none cursor-pointer">
                  <option>Music</option>
                  <option>Podcast</option>
                  <option>Sound Effect</option>
                  <option>Voiceover</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 flex items-center justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-6 py-2 rounded-lg border border-gray-200 bg-white text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-lg text-sm font-bold transition-transform active:scale-95 shadow-md">
            <Upload size={16} />
            Upload Track
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioModal;
