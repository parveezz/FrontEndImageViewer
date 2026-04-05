import { useEffect, useState } from "react";
import ImageCard from "./ImageCard";

const ImageGrid = () => {
      const [totalImages, setTotalImages] = useState(null);
      const [data, setData] = useState([]);

      useEffect(() => {
            getAllImages()
      }, [])

      const getAllImages = async () => {
            try {
                  const url = "http://localhost:5000/api/images"
                  const response = await fetch(url, {
                        method: "GET"
                  })
                  const dat = await response.json()
                  setTotalImages(dat.total);
                  setData(dat.data);

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
            </div>
      );
};

export default ImageGrid;