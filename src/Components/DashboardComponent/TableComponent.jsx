import { Image as ImageIcon, Video, Music } from "lucide-react";
import { BaseUrl } from "../../BaseUrl";

const formatFileSize = (bytes) => {
      if (!bytes || bytes <= 0) return "N/A";
      return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const TableComponent = ({ recentUploads = [] }) => {
      const getMediaIcon = (type) => {
            switch (type) {
                  case "image":
                        return <ImageIcon size={18} className="text-red-400" />;
                  case "video":
                        return <Video size={18} className="text-blue-400" />;
                  case "audio":
                        return <Music size={18} className="text-purple-400" />;
                  default:
                        return null;
            }
      };

      const getBadge = (type) => {
            switch (type) {
                  case "image":
                        return "bg-red-100 text-red-500";
                  case "video":
                        return "bg-blue-100 text-blue-500";
                  case "audio":
                        return "bg-purple-100 text-purple-500";
                  default:
                        return "bg-gray-100 text-gray-500";
            }
      };



      return (
            <div className="px-6 pb-8 bg-[#5751531c]">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

                        {/* Title */}
                        <div className="px-6 py-5 border-b border-gray-100">
                              <h2 className="text-lg font-bold text-gray-900">
                                    Recent Uploads
                              </h2>
                        </div>

                        {/* Header */}
                        {/* Header */}
                        <div className="grid grid-cols-5 px-6 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                              <p>Media</p>
                              <p>Description</p>
                              <p>Type</p>
                              <p>Title</p>
                              <p>Date Added</p>
                        </div>

                        {/* Rows */}
                        <div className="divide-y divide-gray-100">
                              {recentUploads.map((item) => {
                                    const {
                                          _id,
                                          title,
                                          description,
                                          type,
                                          createdAt,
                                          size,
                                          url
                                    } = item;

                                    return (
                                          <div
                                                key={_id}
                                                className="grid grid-cols-5 px-6 py-4 items-center hover:bg-gray-50 transition"
                                          >

                                                {/* Media */}
                                                <div className="flex items-center gap-3 min-w-0">
                                                      <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                                                            {type === "image" && url ? (
                                                                  <img
                                                                        src={`${BaseUrl}/${url}`}
                                                                        alt={title}
                                                                        className="w-full h-full object-cover"
                                                                  />
                                                            ) : (
                                                                  getMediaIcon(type)
                                                            )}
                                                      </div>

                                                      <p className="text-xs text-gray-400">
                                                            {formatFileSize(size)}
                                                      </p>
                                                </div>

                                                {/* Description */}
                                                <p className="text-sm text-gray-500 truncate pr-4">
                                                      {description || "No description available"}
                                                </p>

                                                {/* Type */}
                                                <div>
                                                      <span
                                                            className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold capitalize ${getBadge(
                                                                  type
                                                            )}`}
                                                      >
                                                            {type}
                                                      </span>
                                                </div>

                                                {/* Title */}
                                                <p className="text-sm font-semibold text-gray-800 truncate">
                                                      {title}
                                                </p>

                                                {/* Date */}
                                                <p className="text-sm text-gray-400">
                                                      {new Date(createdAt).toLocaleDateString("en-US", {
                                                            month: "short",
                                                            day: "2-digit",
                                                            year: "numeric",
                                                      })}
                                                </p>

                                          </div>
                                    );
                              })}
                        </div>
                  </div>
            </div>
      );
};

export default TableComponent;