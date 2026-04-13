import { useEffect, useState } from "react";
import { FaHeart, FaDownload, FaExpandAlt, FaTrash } from "react-icons/fa";
import FullSizeModel from "./FullSizeModel";
import Loader from "./Loader";

const ImageCard = () => {
      const [openFullImage, setOpenFullImage] = useState(false);
      const [data, setData] = useState([]);
      const [storeObject, setStoreObject] = useState(null);

      //stoping the scrolling effect after opening the full size model
      useEffect(() => {
            if (openFullImage) {
                  document.body.style.overflow = "hidden"
            } else {
                  document.body.style.overflow = "scroll"
            }
      }, [openFullImage])


      const getAllImages = async () => {
            try {
                  const url = `http://localhost:5000/api/images`
                  const response = await fetch(url, {
                        method: "GET"
                  })
                  const data = await response.json()
                  setData(data?.data || []);

            } catch (e) {
                  console.log(e)
            }
      }


      //calling the api
      useEffect(() => {
            getAllImages()
      }, []);




      return (
            <>
                  {data.length === 0 ?
                        <div className="flex items-center justify-center min-h-screen w-full">

                              <Loader />
                        </div> :

                        data.map((item) => {
                              return (
                                    <div className="relative group aspect-[3/4] rounded-sm overflow-hidden transition-all duration-500 hover:scale-105 hover:z-50 cursor-pointer shadow-2xl"
                                          key={item._id}
                                    >

                                          <img
                                                src={`http://localhost:5000${item.imageUrl}`}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:brightness-110"
                                          />

                                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                          <div className="absolute top-3 right-3 gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0 flex items-center justify-between">


                                                <button className="bg-black/40 backdrop-blur-md p-2.5 rounded-sm text-white hover:bg-red-600 transition-colors cursor-pointer">
                                                      <FaHeart size={14} />
                                                </button>
                                                <button className="bg-black/40 backdrop-blur-md p-2.5 rounded-sm text-white hover:bg-white/20 transition-colors cursor-pointer"
                                                      onClick={() => {
                                                            setOpenFullImage(true)
                                                            setStoreObject(item)
                                                      }}
                                                >
                                                      <FaExpandAlt size={14} />

                                                </button>

                                                <button className="bg-black/40 backdrop-blur-md p-2.5 rounded-sm text-white hover:bg-white/20 transition-colors cursor-pointer"
                                                      onClick={(e) => {
                                                            e.stopPropagation()
                                                      }}
                                                >
                                                      <FaTrash size={15} />
                                                </button>



                                          </div>

                                          <div className="absolute inset-x-0 bottom-0 p-5 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">

                                                <div className="flex items-center justify-between gap-4">
                                                      <div className="flex-grow">
                                                            <h2 className="text-xl font-black tracking-tighter uppercase italic leading-none transition-all duration-700 ease-in-out group-hover:tracking-normal">
                                                                  <span className="text-red-600">{item.title}</span>
                                                            </h2>
                                                      </div>
                                                      <button className="bg-black text-white p-3 rounded-sm border border-white/10 hover:bg-red-600 transition-all duration-700 ease-in-out shadow-2xl flex-shrink-0 active:scale-90 cursor-pointer"

                                                      >
                                                            <FaDownload size={14} />
                                                      </button>
                                                </div>

                                          </div>
                                    </div >
                              )
                        })

                  }

                  {openFullImage && <FullSizeModel
                        data={storeObject}
                        onClose={() => { setOpenFullImage(false) }}
                  />}
            </>
      );
};

export default ImageCard;
