import React, { useState } from "react";
import ImagesTable from "./ImagesTable";
import { Upload, ListFilter, Search } from "lucide-react";
import ImageModal from "./ImageModal";
import EditImageModal from "./EditImageModal";
import FilterDropdown from "../Shared/FilterDropdown";

const ImagesPage = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [isEditModalOpen, setIsEditModalOpen] = useState(false);

      return (
            <div className="p-6 bg-[#5751531c] min-h-screen font-inter">


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
                  <ImagesTable />

                  <ImageModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                  />

                  <EditImageModal
                        isOpen={isEditModalOpen}
                        onClose={() => setIsEditModalOpen(false)}
                  />
            </div>
      );
};

export default ImagesPage;