import React, { useRef } from 'react';
import { X, Play, Image as ImageIcon } from 'lucide-react';

const EditVideoModal = ({ isOpen, onClose, videoData }) => {
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleChangeThumbnailClick = () => {
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
          <h2 className="text-xl font-bold text-gray-800">Edit Video Details</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 max-h-[80vh] overflow-y-auto custom-scrollbar">
          {/* Thumbnail Preview */}
          <div className="relative rounded-xl overflow-hidden aspect-video bg-gray-900 group max-h-[180px]">
            <img 
              src={videoData?.thumbnail || "https://images.unsplash.com/photo-1492691523567-6170c3295db6?w=800&q=80"} 
              alt="Preview" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Play size={18} className="text-white fill-white ml-0.5" />
              </div>
            </div>
            <input 
              type="file" 
              ref={fileInputRef}
              className="hidden" 
              accept="image/*"
              onChange={(e) => console.log(e.target.files[0])}
            />
            <button 
              onClick={handleChangeThumbnailClick}
              className="absolute bottom-3 right-3 flex items-center gap-2 bg-black/70 hover:bg-black text-white px-2.5 py-1.5 rounded-lg text-[10px] font-bold backdrop-blur-md transition-all"
            >
              <ImageIcon size={12} />
              Change Thumbnail
            </button>
          </div>

          {/* Form Fields */}
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 md:col-span-1">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 px-1">Video Title</label>
                <input 
                  type="text" 
                  defaultValue={videoData?.title || "Summer Campaign B-Roll"}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-300 transition-all text-xs font-semibold text-gray-700"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 px-1">Category</label>
                <select className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-300 transition-all text-xs font-semibold text-gray-700 appearance-none cursor-pointer">
                  <option>Marketing</option>
                  <option>Events</option>
                  <option>Internal</option>
                  <option>Tutorials</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 px-1">Description</label>
              <textarea 
                rows={2}
                defaultValue="Drone footage showcasing the coastal areas for the upcoming summer marketing campaign."
                className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-300 transition-all text-xs font-semibold text-gray-700 resize-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 px-1">Visibility</label>
                <select className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-300 transition-all text-xs font-semibold text-gray-700 appearance-none cursor-pointer">
                  <option>Public</option>
                  <option>Private</option>
                  <option>Unlisted</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 px-1">Tags</label>
                <input 
                  type="text" 
                  defaultValue="summer, campaign, drone"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-300 transition-all text-xs font-semibold text-gray-700"
                />
              </div>
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
