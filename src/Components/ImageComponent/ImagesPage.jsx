import React, { useState, useEffect } from "react";
import ImagesTable from "./ImagesTable";
import { Upload, ListFilter, Search } from "lucide-react";
import ImageModal from "./ImageModal";
import EditImageModal from "./EditImageModal";
import FilterDropdown from "../Shared/FilterDropdown";

const ImagesPage = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [isEditModalOpen, setIsEditModalOpen] = useState(false);
      const [isFilterOpen, setIsFilterOpen] = useState(false);
      const [selectedImage, setSelectedImage] = useState(null);

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

      const handleEdit = (image) => {
            setSelectedImage(image);
            setIsEditModalOpen(true);
      };

      return (
            <div className="p-6 bg-[#5751531c] min-h-screen font-inter">
                  {/* Header Section */}
                  <div className="mb-8">
                        <h1 className="text-2xl font-bold text-gray-900">Image Library</h1>
                        <p className="text-sm text-gray-500 mt-1">Manage your image library, upload new assets, and organize your gallery.</p>
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
                                    placeholder="Search images by title or tag..."
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
                                                      title: 'Upload Date',
                                                      options: ['Today', 'This Week', 'This Month', 'Earlier'],
                                                      type: 'grid'
                                                },
                                                {
                                                      title: 'Content Type',
                                                      options: ['Photography', 'Vector', 'Illustration'],
                                                      type: 'flex'
                                                },
                                                {
                                                      title: 'Sort By',
                                                      options: ['Name A-Z', 'Name Z-A', 'Newest', 'Oldest'],
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
                                    Upload Image
                              </button>
                        </div>
                  </div>

                  {/* Table */}
                  <ImagesTable onEdit={handleEdit} />

                  <ImageModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                  />

                  <EditImageModal 
                        isOpen={isEditModalOpen}
                        onClose={() => setIsEditModalOpen(false)}
                        imageData={selectedImage}
                  />
            </div>
      );
};

export default ImagesPage;