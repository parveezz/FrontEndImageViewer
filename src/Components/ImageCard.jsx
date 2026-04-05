import { useState } from "react";
import { FaHeart, FaDownload, FaExpandAlt } from "react-icons/fa";
import FullSizeModel from "./FullSizeModel";

const ImageCard = ({ item }) => {

      const [openFullImage, setOpenFullImage] = useState(false);

      console.log(setOpenFullImage)

      return (
            /* Changed aspect-video to aspect-[2/3] for more height. 
               Removed the bg-[#0a0a0a] so it's just the image. */
            <>
                  <div className="relative group aspect-[3/4] rounded-sm overflow-hidden transition-all duration-500 hover:scale-105 hover:z-50 cursor-pointer shadow-2xl"
                        key={item._id}
                  >

                        {/* 1. IMAGE: Full height, clean bleed */}
                        <img
                              src={`http://localhost:5000${item.imageUrl}`}
                              alt={item.title}
                              className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:brightness-110"
                        />

                        {/* 2. OVERLAY: Subtle vignette only on hover to keep the image clean normally */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* 3. TOP ACTIONS: Heart and Expand */}
                        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0">
                              <button className="bg-black/40 backdrop-blur-md p-2.5 rounded-sm text-white hover:bg-red-600 transition-colors cursor-pointer">
                                    <FaHeart size={14} />
                              </button>
                              <button className="bg-black/40 backdrop-blur-md p-2.5 rounded-sm text-white hover:bg-white/20 transition-colors cursor-pointer"
                                    onClick={() => { setOpenFullImage(true) }}
                              >
                                    <FaExpandAlt size={14} />

                              </button>
                        </div>

                        {/* 4. CONTENT REVEAL: Lowered padding and simplified */}
                        <div className="absolute inset-x-0 bottom-0 p-5 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">

                              <div className="flex items-center justify-between gap-4">
                                    {/* Left Side: Shortened, solid white text on hover */}
                                    <div className="flex-grow">
                                          <h2 className="text-xl font-black tracking-tighter uppercase italic leading-none transition-all duration-700 ease-in-out group-hover:tracking-normal">
                                                <span className="text-red-600">{item.title}</span>
                                          </h2>
                                    </div>

                                    {/* Right Side: Total black button with smooth hover transition */}
                                    <button className="bg-black text-white p-3 rounded-sm border border-white/10 hover:bg-red-600 transition-all duration-700 ease-in-out shadow-2xl flex-shrink-0 active:scale-90 cursor-pointer">
                                          <FaDownload size={14} />
                                    </button>
                              </div>

                        </div>
                  </div>

                  {openFullImage && <FullSizeModel
                        data={item}
                  />}
            </>
      );
};

export default ImageCard;