import React, { useState, useEffect } from 'react'
import Header from '../../Layouts/Shared/Header'
import AudioTable from './AudioTable'
import { Upload } from 'lucide-react'
import AudioModal from './AudioModal'

const Audio = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);

      useEffect(() => {
            if (isModalOpen) {
                  document.body.style.overflow = 'hidden';
            } else {
                  document.body.style.overflow = 'auto';
            }
            return () => {
                  document.body.style.overflow = 'auto';
            };
      }, [isModalOpen]);

      return (
            <div className="min-h-screen bg-[#5751531c]">
                  <Header />
                  <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                              <span className="font-medium text-base w-1/2 uppercase underline underline-offset-8 decoration-red-300 decoration-2">
                                    Audio Library
                              </span>
                              <div className="flex items-center gap-4">
                                    <input
                                          type="text"
                                          placeholder="Search audio..."
                                          className="w-[300px] px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                                    />
                                    <button 
                                          onClick={() => setIsModalOpen(true)}
                                          className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm transition-transform active:scale-95"
                                    >
                                          <Upload size={16} />
                                          Upload Audio
                                    </button>
                              </div>
                        </div>
                        <AudioTable />
                  </div>

                  <AudioModal 
                        isOpen={isModalOpen} 
                        onClose={() => setIsModalOpen(false)} 
                  />
            </div>
      )
}

export default Audio
