import React, { useState } from 'react';
import { Pencil, Trash2, Play } from 'lucide-react';

const VideoTable = ({ onEdit }) => {
  const [deletingId, setDeletingId] = useState(null);
  const videos = [
    {
      id: 1,
      title: "Summer Campaign B-Roll",
      category: "Marketing",
      format: "MP4",
      size: "245 MB",
      views: "12.4K",
      date: "Oct 24, 2023",
      duration: "02:15",
      thumbnail: "https://images.unsplash.com/photo-1492691523567-6170c3295db6?w=200&h=120&fit=crop"
    },
    {
      id: 2,
      title: "Product Launch Keynote",
      category: "Events",
      format: "MOV",
      size: "1.2 GB",
      views: "45.2K",
      date: "Sep 12, 2023",
      duration: "45:30",
      thumbnail: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=200&h=120&fit=crop"
    },
    {
      id: 3,
      title: "Employee Onboarding Part 1",
      category: "Internal",
      format: "MP4",
      size: "185 MB",
      views: "1.2K",
      date: "Aug 05, 2023",
      duration: "15:45",
      thumbnail: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=200&h=120&fit=crop"
    },
    {
      id: 4,
      title: "App Feature Walkthrough",
      category: "Tutorials",
      format: "MP4",
      size: "85 MB",
      views: "8.9K",
      date: "Jul 19, 2023",
      duration: "04:20",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=120&fit=crop"
    }
  ];

  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="text-gray-400 font-bold border-b border-gray-50 uppercase tracking-wider text-[11px]">
              <th className="px-6 py-5">Thumbnail</th>
              <th className="px-6 py-5">Video Details</th>
              <th className="px-6 py-5">Views / Date</th>
              <th className="px-6 py-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {videos.map((video) => (
              <tr key={video.id} className="group hover:bg-gray-50/50 transition-colors relative">
                {/* Overlay for Delete Confirmation */}
                {deletingId === video.id && (
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

                <td className={`px-6 py-4 ${deletingId === video.id ? 'blur-[4px] grayscale' : ''} transition-all duration-300`}>
                  <div className="relative w-32 h-20 rounded-lg overflow-hidden bg-gray-900 group/thumb cursor-pointer">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play size={14} className="text-white fill-white ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black/70 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                      {video.duration}
                    </div>
                  </div>
                </td>

                <td className={`px-6 py-4 ${deletingId === video.id ? 'blur-[4px]' : ''} transition-all duration-300`}>
                  <div className="flex flex-col">
                    <span className="text-base font-semibold text-gray-800 mb-0.5">{video.title}</span>
                    <span className="text-xs text-gray-400 font-medium">
                      {video.category} • {video.format} • {video.size}
                    </span>
                  </div>
                </td>

                <td className={`px-6 py-4 ${deletingId === video.id ? 'blur-[4px]' : ''} transition-all duration-300`}>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-700">{video.views}</span>
                    <span className="text-xs text-gray-400 font-medium">{video.date}</span>
                  </div>
                </td>

                <td className={`px-6 py-4 text-right ${deletingId === video.id ? 'blur-[4px]' : ''} transition-all duration-300`}>
                  <div className="flex items-center justify-end gap-3">
                    <button
                      onClick={() => onEdit(video)}
                      className="p-2 text-gray-400 hover:text-indigo-600 transition-colors"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => setDeletingId(video.id)}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VideoTable;
