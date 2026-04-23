import React, { useState } from "react";
import Header from "../../Layouts/Shared/Header";
import StatCard from "./StatCard";
import { Image, Video, Music, HardDrive, Search, ListFilter } from "lucide-react";
import TableComponent from "./TableComponent";
import FilterDropdown from "../Shared/FilterDropdown";

const Dashboard = () => {
      const [isFilterOpen, setIsFilterOpen] = useState(false);
      const stats = [
            {
                  title: "Total Images",
                  value: "1,248",
                  icon: Image,
                  color: "bg-red-100 text-red-500",
            },
            {
                  title: "Total Videos",
                  value: "342",
                  icon: Video,
                  color: "bg-blue-100 text-blue-500",
            },
            {
                  title: "Total Audio",
                  value: "891",
                  icon: Music,
                  color: "bg-purple-100 text-purple-500",
            },
            {
                  title: "Storage Used",
                  value: "42.8 GB",
                  icon: HardDrive,
                  color: "bg-green-100 text-green-500",
            },
      ];
      return (
            <>
                  <Header />

                  {/* Stats Card */}
                  <div className="w-full bg-[#5751531c] p-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                              {stats.map((item, index) => (
                                    <StatCard key={index} {...item} />
                              ))}
                        </div>
                  </div>

                  {/* Recent Uploads and Search */}
                  <div className="flex items-center justify-between px-6 py-6 bg-[#5751531c]">
                        <div className="flex flex-col">
                              <h2 className="text-xl font-bold text-gray-800">Recent Uploads</h2>
                              <p className="text-xs text-gray-500 mt-0.5">Overview of the latest media assets added to the library.</p>
                        </div>
                        <div className="flex items-center gap-3">
                              <div className="relative group">
                                    <Search 
                                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gray-600 transition-colors" 
                                          size={16} 
                                    />
                                    <input 
                                          type="text" 
                                          name="search" 
                                          id="search" 
                                          placeholder="Search files..." 
                                          className="w-[240px] pl-9 pr-4 py-2 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-200/50 shadow-sm transition-all" 
                                    />
                              </div>
                              <div className="relative">
                                    <button 
                                          onClick={() => setIsFilterOpen(!isFilterOpen)}
                                          className="flex items-center gap-2 bg-white border border-gray-200 text-gray-600 px-3 py-2 rounded-lg text-sm transition-all active:scale-95 hover:bg-gray-50 shadow-sm font-medium"
                                    >
                                          <ListFilter size={14} />
                                          Filter
                                    </button>
                                    <FilterDropdown 
                                          isOpen={isFilterOpen} 
                                          onClose={() => setIsFilterOpen(false)} 
                                          sections={[
                                                {
                                                      title: 'Media Type',
                                                      options: ['Images', 'Videos', 'Audio', 'Documents'],
                                                      type: 'grid'
                                                },
                                                {
                                                      title: 'Status',
                                                      options: ['Published', 'Pending', 'Draft'],
                                                      type: 'flex'
                                                }
                                          ]}
                                    />
                              </div>
                        </div>
                  </div>

                  {/* Table of Recent Uploads */}
                  <TableComponent />
            </>
      );
};

export default Dashboard