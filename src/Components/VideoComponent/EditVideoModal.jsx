import React from 'react';
import { X, Play, Image as ImageIcon } from 'lucide-react';

const EditVideoModal = ({ isOpen, onClose, videoData }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm cursor-pointer"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-800">Edit Video Details</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto custom-scrollbar">
          {/* Thumbnail Preview */}
          <div className="relative rounded-xl overflow-hidden aspect-video bg-gray-900 group">
            <img 
              src={videoData?.thumbnail || "https://images.unsplash.com/photo-1492691523567-6170c3295db6?w=800&q=80"} 
              alt="Preview" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Play size={20} className="text-white fill-white ml-1" />
              </div>
            </div>
            <button className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/70 hover:bg-black text-white px-3 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-md transition-all">
              <ImageIcon size={14} />
              Change Thumbnail
            </button>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Video Title</label>
              <input 
                type="text" 
                defaultValue={videoData?.title || "Summer Campaign B-Roll"}
                placeholder="Enter video title..."
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-300 transition-all text-sm font-medium text-gray-700"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Description</label>
              <textarea 
                rows={4}
                defaultValue="Drone footage showcasing the coastal areas for the upcoming summer marketing campaign. Includes raw and color-graded clips."
                placeholder="Enter video description..."
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-300 transition-all text-sm font-medium text-gray-700 resize-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Category</label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-300 transition-all text-sm font-medium text-gray-700 appearance-none cursor-pointer">
                  <option>Marketing</option>
                  <option>Events</option>
                  <option>Internal</option>
                  <option>Tutorials</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Visibility</label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-300 transition-all text-sm font-medium text-gray-700 appearance-none cursor-pointer">
                  <option>Public</option>
                  <option>Private</option>
                  <option>Unlisted</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Tags</label>
              <input 
                type="text" 
                defaultValue="summer, campaign, drone, coast, b-roll"
                placeholder="e.g. nature, cinematic, 4k"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-300 transition-all text-sm font-medium text-gray-700"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 flex items-center justify-end gap-3 border-t border-gray-100">
          <button 
            onClick={onClose}
            className="px-6 py-2 rounded-lg border border-gray-200 bg-white text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button className="bg-black text-white px-6 py-2 rounded-lg text-sm font-bold transition-transform active:scale-95 shadow-md">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditVideoModal;
