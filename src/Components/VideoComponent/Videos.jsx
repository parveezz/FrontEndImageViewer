import React, { useState, useEffect } from "react"
import Header from "../../Layouts/Shared/Header"
import VideoTable from "./VideoTable"
import { Search, SlidersHorizontal, Upload } from "lucide-react"
import VideoModal from "./VideoModal"
import EditVideoModal from "./EditVideoModal"
import FilterDropdown from "../Shared/FilterDropdown"

const Videos = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [isEditModalOpen, setIsEditModalOpen] = useState(false);
      const [isFilterOpen, setIsFilterOpen] = useState(false);
      const [selectedVideo, setSelectedVideo] = useState(null);

      // Scroll lock for Upload Modal
      useEffect(() => {
            if (isModalOpen) {
                  document.body.classList.add('modal-open');
            } else if (!isEditModalOpen) {
                  document.body.classList.remove('modal-open');
            }
      }, [isModalOpen]);

      // Scroll lock for Edit Modal
      useEffect(() => {
            if (isEditModalOpen) {
                  document.body.classList.add('modal-open');
            } else if (!isModalOpen) {
                  document.body.classList.remove('modal-open');
            }
      }, [isEditModalOpen]);

      const handleEdit = (video) => {
            setSelectedVideo(video);
            setIsEditModalOpen(true);
      };

      return (
            <div className="min-h-screen bg-[#5751531c]">
                  <Header heading={"Videos Dashboard"} />
                  <div className="p-6">
                        {/* Header Section */}
                        <div className="mb-8">
                              <h1 className="text-2xl font-bold text-gray-900">Video Library</h1>
                              <p className="text-sm text-gray-500 mt-1">Upload, edit, and organize your video content library.</p>
                        </div>

                        {/* Actions Section */}
                        <div className="flex items-center justify-between mb-6">
                              <div className="relative group">
                                    <Search
                                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gray-600 transition-colors"
                                          size={18}
                                    />
                                    <input
                                          type="text"
                                          placeholder="Search videos by title or tag..."
                                          className="w-[400px] pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-200/50 shadow-sm transition-all placeholder:text-gray-400"
                                    />
                              </div>

                              <div className="flex items-center gap-3">
                                    <div className="relative">
                                          <button
                                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                                className="flex items-center gap-2 bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-lg text-sm transition-all active:scale-95 hover:bg-gray-50 hover:border-gray-300 shadow-sm font-medium"
                                          >
                                                <SlidersHorizontal size={16} />
                                                Filters
                                          </button>
                                          <FilterDropdown
                                                isOpen={isFilterOpen}
                                                onClose={() => setIsFilterOpen(false)}
                                                sections={[
                                                      {
                                                            title: 'Category',
                                                            options: ['Marketing', 'Events', 'Internal', 'Tutorials'],
                                                            type: 'grid'
                                                      },
                                                      {
                                                            title: 'File Format',
                                                            options: ['MP4', 'MOV', 'AVI', 'WebM'],
                                                            type: 'flex'
                                                      },
                                                      {
                                                            title: 'File Size',
                                                            options: ['Small (< 500MB)', 'Large (> 1GB)'],
                                                            type: 'flex'
                                                      }
                                                ]}
                                          />
                                    </div>
                                    <button
                                          onClick={() => setIsModalOpen(true)}
                                          className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-transform active:scale-95 shadow-md hover:bg-gray-900"
                                    >
                                          <Upload size={16} />
                                          Upload Video
                                    </button>
                              </div>
                        </div>

                        {/* Table Section */}
                        <VideoTable onEdit={handleEdit} />
                  </div>

                  <VideoModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                  />

                  <EditVideoModal
                        isOpen={isEditModalOpen}
                        onClose={() => setIsEditModalOpen(false)}
                        videoData={selectedVideo}
                  />
            </div>
      )
}

export default Videos
