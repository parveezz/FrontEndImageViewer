import { useEffect, useState } from "react";
import ImageCard from "./ImageCard";

const ImageGrid = () => {
      const [totalImages, setTotalImages] = useState(null);
      const [currentPage, setCurrentPage] = useState(1);
      const [totalpages, setTotalPages] = useState(0)
      const [data, setData] = useState([]);

      useEffect(() => {
            getAllImages()
      }, [])

      const getAllImages = async () => {
            try {
                  const url = `http://localhost:5000/api/images`
                  const response = await fetch(url, {
                        method: "GET"
                  })
                  const dat = await response.json()
                  setTotalImages(dat.total);
                  setTotalImages(dat?.total || 0);
                  setData(dat?.data || []);
                  setTotalPages(data.pages || 0)
            } catch (e) {
                  console.log(e)
            }
      }



      return (
            /* Background set to Netflix deep black */
            <div className="min-h-screen px-4 ">
                  {/* HEADER */}
                  <div className="flex justify-end mb-8">
                        <p className="text-sm text-gray-500 font-extrabold uppercase ">
                              Total Images:{" "}
                              <span className="font-semibold text-gray-800 uppercase ">
                                    {totalImages}
                              </span>
                        </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[1400px] mx-auto relative">

                        {data.map((item) => (
                              <ImageCard key={item._id} item={item} />
                        ))}
                  </div>
                  <div className="flex justify-end gap-3 mt-6 max-w-full mx-auto">
                        {
                              ["prev", "next"].map((val) => (
                                    <button
                                          key={val}
                                          type="button"
                                          className="bg-gray-200 px-4 py-2 uppercase font-bold tracking-wider rounded-lg cursor-pointer hover:bg-gray-500 disabled:opacity-50"
                                          onClick={() => {
                                                setCurrentPage((prev) => {
                                                      if (val === "next") {
                                                            return prev < totalpages ? prev + 1 : prev;
                                                      } else {
                                                            return prev > 1 ? prev - 1 : prev;
                                                      }
                                                });
                                          }}
                                    >
                                          {val}
                                    </button>
                              ))
                        }
                  </div>
            </div>
      );
};

export default ImageGrid;