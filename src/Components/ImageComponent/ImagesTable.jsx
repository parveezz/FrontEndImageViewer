import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

const data = [
      {
            id: 1,
            title: "Modern Architecture Hero",
            desc: "High resolution shot of the new office building exterior used for homepage hero section.",
            img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
            date: "12 Feb 2026",
      },
      {
            id: 2,
            title: "Abstract Gradient Banner",
            desc: "Soft pastel gradient background for the marketing landing page section.",
            img: "https://images.unsplash.com/photo-1557683316-973673baf926",
            date: "10 Feb 2026",
      },
];

const ImagesTable = ({ search = "", onEdit }) => {
      const [deletingId, setDeletingId] = useState(null);
      const filteredData = data.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.desc.toLowerCase().includes(search.toLowerCase())
      );

      return (
            <div className="w-full bg-[#5751531c]">
                  <div className="rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="overflow-x-auto custom-scrollbar">
                              <table className="w-full text-sm text-left">

                                    {/* Header */}
                                    <thead>
                                          <tr className="text-gray-400 font-medium border-b border-gray-50">
                                                <th className="px-6 py-5 font-semibold">Preview</th>
                                                <th className="px-6 py-5 font-semibold">Title</th>
                                                <th className="px-6 py-5 font-semibold">Description</th>
                                                <th className="px-6 py-5 font-semibold text-right">Actions</th>
                                          </tr>
                                    </thead>

                                    {/* Body */}
                                    <tbody className="divide-y divide-gray-50">
                                          {filteredData.length > 0 ? (
                                                filteredData.map((item) => (
                                                      <tr
                                                            key={item.id}
                                                            className="hover:bg-gray-50/50 transition-colors group relative"
                                                      >
                                                            {/* Overlay for Delete Confirmation */}
                                                            {deletingId === item.id && (
                                                                  <td colSpan="4" className="absolute inset-0 z-10 flex items-center justify-center bg-white/10 backdrop-blur-[2px]"
                                                                        onClick={() => setDeletingId(null)}
                                                                  >
                                                                        <div className="flex gap-3 animate-in fade-in zoom-in duration-200">
                                                                              <button
                                                                                    onClick={() => setDeletingId(null)}
                                                                                    className="px-4 py-1.5 rounded-lg bg-gray-100 text-gray-600 text-xs font-bold hover:bg-gray-200 transition-colors"
                                                                              >
                                                                                    Cancel
                                                                              </button>
                                                                              <button
                                                                                    className="px-4 py-1.5 rounded-lg bg-red-500 text-white text-xs font-bold hover:bg-red-600 transition-colors shadow-md shadow-red-500/20"
                                                                              >
                                                                                    Confirm Delete
                                                                              </button>
                                                                        </div>
                                                                  </td>
                                                            )}

                                                            {/* Row Content (blurred when deleting) */}
                                                            <td className={`px-6 py-4 ${deletingId === item.id ? 'blur-[4px] grayscale' : ''} transition-all duration-300`}>
                                                                  <div className="flex items-center gap-4">
                                                                        <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                                                                              <img
                                                                                    src={item.img}
                                                                                    alt=""
                                                                                    className="w-full h-full object-cover"
                                                                              />
                                                                        </div>
                                                                  </div>
                                                            </td>

                                                            <td className={`px-6 py-4 ${deletingId === item.id ? 'blur-[4px]' : ''} transition-all duration-300`}>
                                                                  <span className="font-semibold text-gray-700">
                                                                        {item.title}
                                                                  </span>
                                                            </td>

                                                            <td className={`px-6 py-4 ${deletingId === item.id ? 'blur-[4px]' : ''} transition-all duration-300`}>
                                                                  <p className="text-gray-400 max-w-[350px] truncate">
                                                                        {item.desc}
                                                                  </p>
                                                            </td>

                                                            <td className={`px-6 py-4 text-right ${deletingId === item.id ? 'blur-[4px]' : ''} transition-all duration-300`}>
                                                                  <div className="flex justify-end gap-4 text-gray-400">
                                                                        <button
                                                                              onClick={() => onEdit(item)}
                                                                              className="hover:text-black transition"
                                                                        >
                                                                              <Pencil size={16} />
                                                                        </button>
                                                                        <button
                                                                              onClick={() => setDeletingId(item.id)}
                                                                              className="hover:text-red-500 transition"
                                                                        >
                                                                              <Trash2 size={16} />
                                                                        </button>
                                                                  </div>
                                                            </td>
                                                      </tr>
                                                ))
                                          ) : (
                                                <tr>
                                                      <td
                                                            colSpan="4"
                                                            className="text-center py-6 text-gray-400"
                                                      >
                                                            No results found
                                                      </td>
                                                </tr>
                                          )}
                                    </tbody>

                              </table>
                        </div>
                  </div>
            </div>
      );
};

export default ImagesTable;