import { Image as ImageIcon, Video, Music, Play } from "lucide-react";

const TableComponent = () => {
      const data = [
            {
                  name: "hero-banner-v2.jpg",
                  type: "Image",
                  size: "2.4 MB",
                  meta: "1920×1080",
                  description: "Main homepage banner for the new winter ...",
                  date: "Oct 24, 2023",
                  color: "bg-red-50 text-red-500",
                  icon: ImageIcon,
            },
            {
                  name: "product-demo-final.mp4",
                  type: "Video",
                  size: "45.2 MB",
                  meta: "02:34",
                  description: "Feature walkthrough for the Q4 release ann...",
                  date: "Oct 23, 2023",
                  color: "bg-blue-50 text-blue-500",
                  icon: Video,
                  isVideo: true,
            },
            {
                  name: "podcast-ep-42.mp3",
                  type: "Audio",
                  size: "28.5 MB",
                  meta: "45:12",
                  description: "Interview with lead designer about new UI ...",
                  date: "Oct 20, 2023",
                  color: "bg-purple-50 text-purple-500",
                  icon: Music,
            }, {
                  name: "Pos.mp3",
                  type: "Audio",
                  size: "2.5 MB",
                  meta: "45:12",
                  description: "Interview to lead designer about new UI ...",
                  date: "Oct 20, 2023",
                  color: "bg-purple-50 text-purple-500",
                  icon: Music,
            },
            {
                  name: "product-demo-final.mp4",
                  type: "Video",
                  size: "45.2 MB",
                  meta: "02:34",
                  description: "Feature walkthrough for the Q4 release ann...",
                  date: "Oct 23, 2023",
                  color: "bg-blue-50 text-blue-500",
                  icon: Video,
                  isVideo: true,
            }
      ];

      return (
            <div className="w-full bg-[#5751531c] p-4">
                  <div className="rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="overflow-x-auto">
                              <table className="w-full text-sm text-left">
                                    <thead>
                                          <tr className="text-gray-400 font-medium border-b border-gray-50">
                                                <th className="px-6 py-5 font-semibold">Media</th>
                                                <th className="px-6 py-5 font-semibold">Description</th>
                                                <th className="px-6 py-5 font-semibold">Type</th>
                                                <th className="px-6 py-5 font-semibold text-right">Date Added</th>
                                          </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                          {data.map((item, index) => (
                                                <tr key={index} className="hover:bg-gray-50/50 transition-colors group">
                                                      {/* Media Column */}
                                                      <td className="px-6 py-4">
                                                            <div className="flex items-center gap-4">
                                                                  <div className="relative w-12 h-12 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0 flex items-center justify-center">
                                                                        {item.isVideo ? (
                                                                              <div className="relative w-full h-full">
                                                                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                                                                          <Play size={16} className="text-white fill-white" />
                                                                                    </div>
                                                                                    <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                                                                                          <Video size={20} className="text-slate-400" />
                                                                                    </div>
                                                                              </div>
                                                                        ) : item.type === "Audio" ? (
                                                                              <div className="w-full h-full bg-slate-50 flex items-center justify-center">
                                                                                    <Music size={20} className="text-slate-400" />
                                                                              </div>
                                                                        ) : (
                                                                              <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                                                                                    <ImageIcon size={20} className="text-slate-400" />
                                                                              </div>
                                                                        )}
                                                                  </div>
                                                                  <div className="flex flex-col">
                                                                        <span className="font-semibold text-gray-700 leading-tight">
                                                                              {item.name}
                                                                        </span>
                                                                        <span className="text-xs text-gray-400 mt-1">
                                                                              {item.size} • {item.meta}
                                                                        </span>
                                                                  </div>
                                                            </div>
                                                      </td>

                                                      {/* Description Column */}
                                                      <td className="px-6 py-4">
                                                            <p className="text-gray-400 max-w-[300px] truncate">
                                                                  {item.description}
                                                            </p>
                                                      </td>

                                                      {/* Type Column */}
                                                      <td className="px-6 py-4">
                                                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide ${item.color}`}>
                                                                  <item.icon size={14} />
                                                                  {item.type}
                                                            </div>
                                                      </td>

                                                      {/* Date Column */}
                                                      <td className="px-6 py-4 text-right">
                                                            <span className="text-gray-400 font-medium">
                                                                  {item.date}
                                                            </span>
                                                      </td>
                                                </tr>
                                          ))}
                                    </tbody>
                              </table>
                        </div>
                  </div>
            </div >
      );
};

export default TableComponent;
