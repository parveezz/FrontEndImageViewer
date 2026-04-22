import React from "react";
import ImagesTable from "./ImagesTable";
import { Upload } from "lucide-react";

const ImagesPage = () => {
      return (
            <div className="p-6 bg-[#5751531c] min-h-screen font-inter">
                  {/* Header */}
                  <div className="mb-6">
                        <h1 className="text-2xl font-semibold text-gray-800">Images</h1>
                        <p className="text-sm text-gray-500 mt-1">
                              Manage your image library, upload new assets, and edit details.
                        </p>
                  </div>

                  {/* Search + Button */}
                  <div className="flex items-center justify-between mb-4">
                        <input
                              type="text"
                              placeholder="Search images by title or tag..."
                              className="w-[300px] px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                        />

                        <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm">
                              <Upload size={16} />
                              Upload Image
                        </button>
                  </div>

                  {/* Table */}
                  <ImagesTable />
            </div>
      );
};

export default ImagesPage;