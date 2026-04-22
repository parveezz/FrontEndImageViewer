import React, { useState, useEffect } from "react"
import Header from "../../Layouts/Shared/Header"
import VideoTable from "./VideoTable"
import { Search, SlidersHorizontal, Upload } from "lucide-react"
import VideoModal from "./VideoModal"

const Videos = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);

      useEffect(() => {
            if (isModalOpen) {
                  document.body.classList.add('modal-open');
            } else {
                  document.body.classList.remove('modal-open');
            }
            return () => {
                  document.body.classList.remove('modal-open');
            };
      }, [isModalOpen]);


      return (
            <div className="min-h-screen bg-[#5751531c]">
                  <Header />
                  <div className="p-6">
                        {/* Header Section */}
                        <div className="mb-6">
                              <span className="font-medium text-base uppercase underline underline-offset-8 decoration-red-300 decoration-2">
                                    Video Management
                              </span>
                        </div>

                        {/* Actions Section */}
                        <div className="flex items-center justify-between mb-6">
                              <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                          type="text"
                                          placeholder="Search videos by title or tag..."
                                          className="w-[400px] pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-300 transition-all"
                                    />
                              </div>

                              <div className="flex items-center gap-3">
                                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                                          <SlidersHorizontal size={16} />
                                          Filters
                                    </button>
                                    <button
                                          onClick={() => setIsModalOpen(true)}
                                          className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-transform active:scale-95 shadow-sm"
                                    >
                                          <Upload size={16} />
                                          Upload Video
                                    </button>
                              </div>
                        </div>

                        {/* Table Section */}
                        <VideoTable />
                  </div>

                  <VideoModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                  />
            </div>
      )
}

export default Videos
