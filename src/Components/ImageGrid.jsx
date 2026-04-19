import { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { baseUrl } from "../../baseurl";

const ImageGrid = ({ sendInputValue }) => {
      const [images, setImages] = useState([]);
      const [currentPage, setCurrentPage] = useState(1);
      const [totalPages, setTotalPages] = useState(1);
      const [loading, setLoading] = useState(true);

      // 🔥 Fetch images
      const getImages = async () => {
            setLoading(true);
            try {
                  const res = await fetch(
                        `${baseUrl}/api/images?page=${currentPage}`
                  );
                  const data = await res.json();

                  setImages(data?.data || []);
                  setTotalPages(data?.pages || 1);
            } catch (err) {
                  console.log(err);
            } finally {
                  setLoading(false);
            }
      };

      // 🔁 Fetch on page change
      useEffect(() => {
            getImages();
      }, [currentPage]);

      // 🔄 Reset page when searching
      useEffect(() => {
            setCurrentPage(1);
      }, [sendInputValue]);

      // 🔍 Filter images safely
      const filteredImages = images.filter((img) =>
            img.title
                  .toLowerCase()
                  .includes((sendInputValue || "").toLowerCase())
      );

      return (
            <div className="min-h-screen px-4">

                  {/* GRID */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w mx-auto">

                        {loading ? (
                              <p className="col-span-full text-center text-gray-400">
                                    Loading...
                              </p>
                        ) : filteredImages.length === 0 ? (
                              <p className="col-span-full text-center text-gray-500">
                                    No images found
                              </p>
                        ) : (
                              filteredImages.map((item) => (
                                    <ImageCard key={item._id} item={item} />
                              ))
                        )}

                  </div>

                  {/* 🔻 PAGINATION */}
                  <div className="flex items-center justify-center gap-2 mt-8 mb-6">

                        {/* Prev */}
                        <button
                              onClick={() =>
                                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                              }
                              disabled={currentPage === 1}
                              className="p-2 rounded-lg border bg-white text-gray-600 disabled:opacity-50"
                        >
                              <ChevronLeft className="w-4 h-4" />
                        </button>

                        {/* Page Numbers */}
                        {[...Array(totalPages)].map((_, i) => (
                              <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`w-8 h-8 rounded-lg text-sm font-bold ${currentPage === i + 1
                                          ? "bg-red-600 text-white"
                                          : "bg-white border text-gray-600"
                                          }`}
                              >
                                    {i + 1}
                              </button>
                        ))}

                        {/* Next */}
                        <button
                              onClick={() =>
                                    setCurrentPage((prev) =>
                                          Math.min(prev + 1, totalPages)
                                    )
                              }
                              disabled={currentPage === totalPages}
                              className="p-2 rounded-lg border bg-white text-gray-600 disabled:opacity-50"
                        >
                              <ChevronRight className="w-4 h-4" />
                        </button>

                  </div>
            </div>
      );
};

export default ImageGrid;