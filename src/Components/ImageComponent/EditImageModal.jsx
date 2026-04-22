import React, { useState } from 'react';
import { X, Image as ImageIcon, RotateCcw } from 'lucide-react';

const EditImageModal = ({ isOpen, onClose, imageData }) => {
  const [tags, setTags] = useState(['architecture', 'hero', 'office']);

  if (!isOpen) return null;

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

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
          <h2 className="text-xl font-bold text-gray-800">Edit Image Details</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto custom-scrollbar">
          {/* Image Preview Area */}
          <div className="space-y-3">
            <div className="relative rounded-xl overflow-hidden bg-gray-100 group border border-gray-100">
              <img 
                src={imageData?.img || "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"} 
                alt="Preview" 
                className="w-full aspect-[2/1] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-all">
                <button className="flex items-center gap-2 bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-bold shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <RotateCcw size={16} />
                  Replace Image
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-[11px] font-bold text-gray-400 uppercase tracking-wider px-1">
              <span>architecture-hero-img.png</span>
              <span>4.2 MB • 2400x1600px</span>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4 pt-2">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Title</label>
              <input 
                type="text" 
                defaultValue={imageData?.title || "Modern Architecture Hero"}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-300 transition-all text-sm font-medium text-gray-700"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Description</label>
              <textarea 
                rows={3}
                defaultValue={imageData?.desc || "High resolution shot of the new office building exterior used for homepage hero section."}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-300 transition-all text-sm font-medium text-gray-700 resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Tags</label>
              <div className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white flex flex-wrap gap-2 items-center min-h-[45px]">
                {tags.map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-gray-50 border border-gray-200 text-[11px] font-bold text-gray-600">
                    {tag}
                    <button onClick={() => removeTag(tag)} className="hover:text-red-500 ml-1">
                      <X size={12} />
                    </button>
                  </span>
                ))}
                <input 
                  type="text" 
                  placeholder="Add a tag..."
                  className="flex-1 min-w-[100px] bg-transparent outline-none text-xs font-medium text-gray-400"
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

export default EditImageModal;
