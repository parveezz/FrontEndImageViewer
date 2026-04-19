import React, { useEffect, useState } from "react";
import { Edit3, Trash2, Image as ImageIcon, Plus, Files, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { baseUrl } from "../../baseUrl";
import { useNavigate } from "react-router-dom";
import UploadBox from "../UploadBox";
import LoadingState from "./LoadingState";
import EditImage from "./EditImage";
import toast from "react-hot-toast";

const Dashboard = () => {
      const [apiData, setApiData] = useState([]);
      const [totalImages, setTotalImages] = useState(0);
      const [totalPages, setTotalPages] = useState(0);
      const [currentPage, setCurrentPage] = useState(1);
      const [loading, setLoading] = useState(true);
      const [isUploadOpen, setIsUploadOpen] = useState(false);
      const [openEdit, setOpenEdit] = useState(false);
      const [selectedImage, setSelectedImage] = useState(null);


      const navigate = useNavigate();

      const handleLogout = () => {
            localStorage.removeItem("token");
            navigate("/login");
      };
      // to get the images
      const getAllImages = async () => {
            setLoading(true);
            try {
                  const response = await fetch(`${baseUrl}/api/images?page=${currentPage}`);
                  const data = await response.json();
                  setApiData(data?.data || []);
                  setTotalImages(data?.total || 0);
                  setTotalPages(data?.pages || 0);
            } catch (err) {
                  console.log(err);
            } finally {
                  setLoading(false);
            }
      };
      useEffect(() => {

            getAllImages();
      }, [currentPage]);

      useEffect(() => {
            if (isUploadOpen || selectedImage) {
                  document.body.style.overflow = "hidden";
            } else {
                  document.body.style.overflow = "auto";
            }
      }, [isUploadOpen, selectedImage]);

      //to delte the images 
      const deleteImage = async (id) => {
            try {
                  const token = localStorage.getItem("token");

                  const url = `${baseUrl}/api/images/${id}`;

                  const fetching = await fetch(url, {
                        method: "DELETE",
                        headers: {
                              Authorization: `Bearer ${token}`,
                        },
                  });

                  const response = await fetching.json();

                  if (fetching.ok) {
                        toast.success(response.message);

                        // 🔥 update UI instantly
                        setApiData((prev) => prev.filter((img) => img._id !== id));

                  } else {
                        toast.error(response.message);
                  }

            } catch (e) {
                  console.log(e);
            }
      };


      return (
            <>
                  {/* 🔷 Scrollbar Hidden using arbitrary Tailwind classes */}
                  <div className="p-8 bg-[#f8fafc] min-h-screen font-sans [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

                        {/* Top Header */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-6">
                              <div className="flex items-center gap-4 mb-6">
                                    <button
                                          onClick={() => navigate(-1)}
                                          className="p-2 rounded-lg bg-white shadow-sm border border-gray-200 hover:bg-gray-100 transition"
                                    >
                                          <ArrowLeft className="w-5 h-5 text-gray-700" />
                                    </button>
                                    <div>
                                          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Gallery Dashboard</h1>
                                          <p className="text-sm text-slate-500">Manage your digital assets</p>
                                    </div>
                              </div>

                              <div className="flex items-center justify-between">

                                    {/* LEFT SIDE: Stats + Upload */}
                                    <div className="flex items-center gap-2 bg-white p-1 rounded-2xl shadow-sm border border-slate-100">

                                          {/* Stats */}
                                          <div className="hidden sm:flex items-center gap-3 px-4 py-2 border-r border-slate-100">
                                                <div className="p-2 bg-red-50 rounded-lg">
                                                      <ImageIcon className="w-4 h-4 text-red-600" />
                                                </div>
                                                <div>
                                                      <p className="text-[10px] uppercase font-bold text-slate-400 leading-none">Images</p>
                                                      <p className="text-sm font-black text-slate-800">{totalImages}</p>
                                                </div>
                                          </div>

                                          <div className="hidden sm:flex items-center gap-3 px-4 py-2 border-r border-slate-100">
                                                <div className="p-2 bg-blue-50 rounded-lg">
                                                      <Files className="w-4 h-4 text-blue-600" />
                                                </div>
                                                <div>
                                                      <p className="text-[10px] uppercase font-bold text-slate-400 leading-none">Pages</p>
                                                      <p className="text-sm font-black text-slate-800">{totalPages}</p>
                                                </div>
                                          </div>

                                          {/* Upload */}
                                          <div className="flex items-center gap-3 pl-2">
                                                <button
                                                      onClick={() => setIsUploadOpen(true)}
                                                      className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-red-200 active:scale-95 text-sm"
                                                >
                                                      <Plus className="w-4 h-4" />
                                                      <span className="hidden lg:inline">Upload New</span>
                                                </button>
                                          </div>

                                    </div>

                                    {/* RIGHT SIDE: Logout (separate div) */}
                                    <div className="flex items-center ml-3">
                                          <button
                                                onClick={handleLogout}
                                                className="px-4 py-4 rounded-xl bg-white border border-slate-200 text-slate-700 
      hover:bg-red-500 hover:text-white hover:border-red-500 transition-all text-sm font-medium shadow-sm"
                                          >
                                                🚪 Sign Out
                                          </button>
                                    </div>

                              </div>
                        </div>

                        {/* Content Area */}
                        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
                              <div className="px-6 py-4 border-b border-slate-50 flex items-center justify-between bg-white">
                                    <h3 className="font-bold text-slate-800 text-lg">Recent Library</h3>
                              </div>

                              <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                          <thead>
                                                <tr className="text-[10px] uppercase tracking-wider text-slate-400 bg-slate-50/50">
                                                      <th className="px-4 py-3 font-bold">Preview</th>
                                                      <th className="px-4 py-3 font-bold">Title</th>
                                                      <th className="px-4 py-3 font-bold hidden lg:table-cell">Description</th>
                                                      <th className="px-4 py-3 font-bold hidden md:table-cell">Created At</th>
                                                      <th className="px-4 py-3 font-bold text-center">Actions</th>
                                                </tr>
                                          </thead>
                                          <tbody className="divide-y divide-slate-100">
                                                {loading ? (
                                                      <LoadingState />
                                                ) : (
                                                      apiData.map((item) => (
                                                            <tr key={item._id} className="group hover:bg-slate-50/50 transition-colors">
                                                                  <td className="px-4 py-2">
                                                                        <div className="relative w-12 h-12 rounded-lg overflow-hidden shadow-sm border border-slate-100">
                                                                              <img
                                                                                    src={`${baseUrl}${item.imageUrl}`}
                                                                                    alt={item.title}
                                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                                              />
                                                                        </div>
                                                                  </td>
                                                                  <td className="px-4 py-2">
                                                                        <p className="font-bold text-slate-800 text-sm leading-tight">{item.title}</p>
                                                                  </td>
                                                                  {/* 🔷 Description Column Added Back */}
                                                                  <td className="px-4 py-2 hidden lg:table-cell">
                                                                        <p className="text-slate-500 text-xs line-clamp-1 max-w-xs">
                                                                              {item.description || <span className="italic opacity-50">No description provided.</span>}
                                                                        </p>
                                                                  </td>
                                                                  <td className="px-4 py-2 hidden md:table-cell text-slate-500 text-xs font-medium">
                                                                        {new Date(item.createdAt).toLocaleDateString()}
                                                                  </td>
                                                                  <td className="px-4 py-2">
                                                                        <div className="flex justify-center gap-2">
                                                                              <button
                                                                                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
                                                                                    onClick={() => {
                                                                                          setSelectedImage(item);
                                                                                          setOpenEdit(true);
                                                                                    }}
                                                                              >
                                                                                    <Edit3 className="w-3.5 h-3.5" />
                                                                                    <span className="text-[10px] font-bold uppercase tracking-wider">Edit</span>
                                                                              </button>
                                                                              <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all"
                                                                                    onClick={() => {
                                                                                          deleteImage(item._id)
                                                                                    }}
                                                                              >
                                                                                    <Trash2 className="w-3.5 h-3.5" />
                                                                                    <span className="text-[10px] font-bold uppercase tracking-wider">Delete</span>
                                                                              </button>
                                                                        </div>
                                                                  </td>
                                                            </tr>
                                                      ))
                                                )}
                                          </tbody>
                                    </table>
                              </div>

                              {/* Pagination Section */}
                              <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                                          Page <span className="text-slate-900">{currentPage}</span> of {totalPages || 1}
                                    </p>

                                    <div className="flex items-center gap-2">
                                          <button
                                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                                disabled={currentPage === 1 || loading}
                                                className="p-2 rounded-lg border border-slate-200 bg-white text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 transition-all"
                                          >
                                                <ChevronLeft className="w-4 h-4" />
                                          </button>

                                          <div className="flex gap-1">
                                                {[...Array(totalPages)].map((_, index) => (
                                                      <button
                                                            key={index + 1}
                                                            onClick={() => setCurrentPage(index + 1)}
                                                            className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${currentPage === index + 1
                                                                  ? "bg-red-600 text-white shadow-md shadow-red-100"
                                                                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                                                                  }`}
                                                      >
                                                            {index + 1}
                                                      </button>
                                                ))}
                                          </div>

                                          <button
                                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                                disabled={currentPage === totalPages || loading}
                                                className="p-2 rounded-lg border border-slate-200 bg-white text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 transition-all"
                                          >
                                                <ChevronRight className="w-4 h-4" />
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </div>

                  {isUploadOpen && <UploadBox onClose={() => setIsUploadOpen(false)}
                        updateApi={() => { getAllImages() }} />}
                  {openEdit && (
                        <EditImage
                              data={selectedImage}
                              onClose={() => {
                                    setOpenEdit(false);
                                    setSelectedImage(null);
                              }}
                        />
                  )}
            </>
      );
};

export default Dashboard;