import React from 'react';
import { X, Check, Filter } from 'lucide-react';

const FilterDropdown = ({ 
  isOpen, 
  onClose, 
  sections = [],
  onApply 
}) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 z-[100] animate-in fade-in zoom-in duration-200 origin-top-right overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-50 flex items-center justify-between bg-gray-50/30">
        <div className="flex items-center gap-2">
          <Filter size={16} className="text-gray-900" />
          <span className="font-bold text-gray-900 text-sm">Filter Options</span>
        </div>
        <button 
          onClick={onClose} 
          className="p-1.5 hover:bg-gray-200/50 rounded-full text-gray-400 transition-colors"
        >
          <X size={16} />
        </button>
      </div>

      {/* Content */}
      <div className="p-5 space-y-6 max-h-[400px] overflow-y-auto custom-scrollbar">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.1em] mb-3">{section.title}</h3>
            <div className={`${section.type === 'grid' ? 'grid grid-cols-2 gap-2' : 'flex flex-wrap gap-2'}`}>
              {section.options.map((opt) => (
                <button
                  key={opt}
                  className={`px-3 py-2 rounded-xl border text-[13px] font-medium transition-all text-left ${
                    opt === section.active 
                      ? 'border-red-500 bg-red-50 text-red-600 font-bold' 
                      : 'border-gray-100 text-gray-600 hover:border-gray-200 hover:bg-gray-50'
                  } ${section.type === 'grid' ? 'flex items-center justify-between' : ''}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-5 py-4 bg-gray-50/50 border-t border-gray-50 flex gap-3">
        <button 
          onClick={onClose}
          className="flex-1 py-2.5 text-sm font-bold text-gray-500 hover:text-gray-700 transition-colors"
        >
          Reset
        </button>
        <button 
          onClick={onApply}
          className="flex-1 py-2.5 bg-black text-white text-sm font-bold rounded-xl shadow-lg shadow-black/10 active:scale-95 transition-transform"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterDropdown;
