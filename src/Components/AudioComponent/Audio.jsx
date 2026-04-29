import React, { useState, useEffect } from 'react'
import Header from '../../Layouts/Shared/Header'
import AudioTable from './AudioTable'
import { Upload, ListFilter, Search } from 'lucide-react'
import AudioModal from './AudioModal'
import EditAudioModal from './EditAudioModal'
import FilterDropdown from '../Shared/FilterDropdown'

const Audio = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [isEditModalOpen, setIsEditModalOpen] = useState(false);
      const [isFilterOpen, setIsFilterOpen] = useState(false);
      const [selectedTrack, setSelectedTrack] = useState(null);

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

      const handleEdit = (track) => {
            setSelectedTrack(track);
            setIsEditModalOpen(true);
      };

      return (
            <div className="min-h-screen bg-[#5751531c]">
                  <Header heading={"Audio Board"} />
                  <div className="p-6">
                        <div className="mb-8">
                              <h1 className="text-2xl font-bold text-gray-900">Audio Library</h1>
                              <p className="text-sm text-gray-500 mt-1">Manage and organize your audio tracks, podcasts, and sound library.</p>
                        </div>

                        <div className="flex items-center justify-between mb-6">
                              <div className="relative group">
                                    <Search
                                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gray-600 transition-colors"
                                          size={18}
                                    />
                                    <input
                                          type="text"
                                          placeholder="Search audio tracks..."
                                          className="w-[320px] pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-200/50 shadow-sm transition-all placeholder:text-gray-400"
                                    />
                              </div>

                              <div className="flex items-center gap-3">
                                    <div className="relative">
                                          <button
                                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                                className="flex items-center gap-2 bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-lg text-sm transition-all active:scale-95 hover:bg-gray-50 hover:border-gray-300 shadow-sm font-medium"
                                          >
                                                <ListFilter size={16} />
                                                Filter
                                          </button>
                                          <FilterDropdown
                                                isOpen={isFilterOpen}
                                                onClose={() => setIsFilterOpen(false)}
                                                sections={[
                                                      {
                                                            title: 'Category',
                                                            options: ['Music', 'Podcast', 'Sound Effect'],
                                                            type: 'grid'
                                                      },
                                                      {
                                                            title: 'Duration',
                                                            options: ['Short (< 2m)', 'Medium (2-5m)', 'Long (> 5m)'],
                                                            type: 'flex'
                                                      },
                                                      {
                                                            title: 'Plays',
                                                            options: ['Popular (> 10k)', 'Trending (5-10k)', 'New (< 5k)'],
                                                            type: 'flex'
                                                      }
                                                ]}
                                          />
                                    </div>
                                    <button
                                          onClick={() => setIsModalOpen(true)}
                                          className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm transition-transform active:scale-95 shadow-md hover:bg-gray-900 font-medium"
                                    >
                                          <Upload size={16} />
                                          Upload Audio
                                    </button>
                              </div>
                        </div>
                        <AudioTable onEdit={handleEdit} />
                  </div>

                  <AudioModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                  />

                  <EditAudioModal
                        isOpen={isEditModalOpen}
                        onClose={() => setIsEditModalOpen(false)}
                        audioData={selectedTrack}
                  />
            </div>
      )
}

export default Audio
