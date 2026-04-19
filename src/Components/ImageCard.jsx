import { useState, useEffect } from "react";
import { FaHeart, FaDownload, FaExpandAlt } from "react-icons/fa";
import FullSizeModel from "./FullSizeModel";
import { baseUrl } from "../baseUrl";
import { downloadImage } from "../utils/downloadImage";

const ImageCard = ({ item }) => {
      const [openFullImage, setOpenFullImage] = useState(false);

      useEffect(() => {
            document.body.style.overflow = openFullImage ? "hidden" : "auto";
      }, [openFullImage]);

      return (
            <>
                  <div className="relative group aspect-[3/4] rounded-sm overflow-hidden hover:scale-105 transition cursor-pointer shadow-lg">

                        <img
                              src={`${baseUrl}${item.imageUrl}`}
                              alt={item.title}
                              className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition" />

                        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100">
                              <button className="bg-black/40 p-2 rounded text-white hover:bg-red-600">
                                    <FaHeart size={14} />
                              </button>

                              <button
                                    className="bg-black/40 p-2 rounded text-white"
                                    onClick={() => setOpenFullImage(true)}
                              >
                                    <FaExpandAlt size={14} />
                              </button>
                        </div>

                        <div className="absolute bottom-0 p-4 text-white opacity-0 group-hover:opacity-100">
                              <h2 className="text-sm font-bold">{item.title}</h2>

                              <button
                                    className="mt-2 bg-black p-2 rounded"
                                    onClick={() => downloadImage(item)}
                              >
                                    <FaDownload size={14} />
                              </button>
                        </div>
                  </div>

                  {openFullImage && (
                        <FullSizeModel
                              data={item}
                              onClose={() => setOpenFullImage(false)}
                        />
                  )}
            </>
      );
};

export default ImageCard;