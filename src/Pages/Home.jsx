import ImageGrid from "../Components/ImageGrid";
import Navbar from "../Components/Navbar";


const Home = () => {
      return (
            <div className="bg-gray-100 min-h-screen">
                  <Navbar />

                  <div className="p-4 w-full mx-auto">
                        <ImageGrid />
                  </div>
            </div>
      );
};

export default Home;