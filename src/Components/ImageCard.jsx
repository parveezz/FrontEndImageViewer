import { useEffect, useState } from "react";
import { FaHeart, FaDownload, FaExpandAlt, FaTrash } from "react-icons/fa";
import FullSizeModel from "./FullSizeModel";
import Loader from "./Loader";
import { baseUrl } from "../../baseurl";

const ImageCard = ({ filterText }) => {
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

      //calling the api
      useEffect(() => {
            const getAllImages = async () => {
                  try {
                        const url = `${baseUrl}/api/images`
                        const response = await fetch(url, {
                              method: "GET"
                        })
                        const data = await response.json()
                        setData(data?.data || []);

                  } catch (e) {
                        console.log(e)
                  }
            }
            getAllImages()
      }, []);


      const downloadImage = async (data) => {
            try {
                  const BASE_URL = "http://localhost:5000";
                  const url = BASE_URL + data.imageUrl;

                  // fetch the image
                  const response = await fetch(url);
                  if (!response.ok) throw new Error("Failed to fetch image");

                  // convert to blob
                  const blob = await response.blob();

                  // create temporary URL
                  const blobUrl = window.URL.createObjectURL(blob);

                  // create anchor
                  const link = document.createElement("a");
                  link.href = blobUrl;

                  // file name (with extension)
                  link.download = `${data.title}.jpg`;

                  document.body.appendChild(link);

                  // trigger download
                  link.click();

                  // cleanup
                  link.remove();
                  //remove the temparory fileurl
                  window.URL.revokeObjectURL(blobUrl);

            } catch (error) {
                  console.error("Download failed:", error);
            }
      };


      console.log(filterText)



      return (
            <>
                  {data.length === 0 ?
                        <div className="col-span-full flex items-center justify-center min-h-[70vh] w-full">
                              <Loader />
                        </div> :

                        data.map((item) => {
                              return (
                                    <div className="relative group aspect-[3/4] rounded-sm overflow-hidden transition-all duration-500 hover:scale-105 hover:z-30 cursor-pointer shadow-2xl"
                                          key={item._id}
                                    >

                                          <img
                                                src={`${baseUrl}${item.imageUrl}`}
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
                                          </div>

                                          <div className="absolute inset-x-0 bottom-0 p-5 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">

                                                <div className="flex items-center justify-between gap-4">
                                                      <div className="flex-grow">
                                                            <h2 className="text-xl font-black tracking-tighter uppercase italic leading-none transition-all duration-700 ease-in-out group-hover:tracking-normal">
                                                                  <span className="text-red-600">{item.title}</span>
                                                            </h2>
                                                      </div>
                                                      <button className="bg-black text-white p-3 rounded-sm border border-white/10 hover:bg-red-600 transition-all duration-700 ease-in-out shadow-2xl flex-shrink-0 active:scale-90 cursor-pointer"
                                                            onClick={() => {
                                                                  downloadImage(item)
                                                            }}

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
