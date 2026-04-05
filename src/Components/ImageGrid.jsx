import ImageCard from "./ImageCard";

const ImageGrid = () => {
      return (
            /* Background set to Netflix deep black */
            <div className="min-h-screen px-4 py-12">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[1400px] mx-auto">
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                  </div>
            </div>
      );
};

export default ImageGrid;