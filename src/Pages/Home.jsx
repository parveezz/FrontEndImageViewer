import { useState } from "react";
import ImageGrid from "../Components/ImageGrid";
import Navbar from "../Components/Navbar";

const Home = () => {
      const [storeInput, setStoreInput] = useState("");

      const getInputValue = (value) => {
            setStoreInput(value);
      };

      return (
            <div className="bg-gray-100 min-h-screen">
                  <Navbar getInputValue={getInputValue} />

                  <div className="p-4 w-full mx-auto">
                        <ImageGrid sendInputValue={storeInput} />
                  </div>
            </div>
      );
};

export default Home;