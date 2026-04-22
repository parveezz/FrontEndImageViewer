import React from 'react';
import { X, Music, RotateCcw } from 'lucide-react';

const EditAudioModal = ({ isOpen, onClose, audioData }) => {
  if (!isOpen) return null;

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
          <h2 className="text-xl font-bold text-gray-800">Edit Audio Track</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto custom-scrollbar">
          {/* Audio File Preview */}
          <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50/50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden shadow-sm">
                <img 
                  src={audioData?.image || "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=100&h=100&fit=crop"} 
                  alt="Art" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-700 truncate max-w-[150px]">
                  {audioData?.title || "midnight-lofi-beats.wav"}
                </span>
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tight">
                  Audio • 42.5 MB • 03:24
                </span>
              </div>
            </div>
            <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-gray-50 transition-all shadow-sm">
              <RotateCcw size={14} />
              Replace
            </button>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Track Title</label>
              <input 
                type="text" 
                defaultValue={audioData?.title || "Midnight Lofi Beats"}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/10 focus:border-purple-300 transition-all text-sm font-medium text-gray-700"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Artist / Creator</label>
                <input 
                  type="text" 
                  defaultValue={audioData?.subtitle || "Chill Study Music"}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/10 focus:border-purple-300 transition-all text-sm font-medium text-gray-700"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Category</label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/10 focus:border-purple-300 transition-all text-sm font-medium text-gray-700 appearance-none cursor-pointer">
                  <option>Music</option>
                  <option>Podcast</option>
                  <option>Sound Effect</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Description (Optional)</label>
              <textarea 
                rows={3}
                defaultValue="Relaxing lofi hip hop beats perfect for late-night studying and focus sessions."
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/10 focus:border-purple-300 transition-all text-sm font-medium text-gray-700 resize-none"
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

export default EditAudioModal;
