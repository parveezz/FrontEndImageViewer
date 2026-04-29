import Sidebar from "./Layouts/Sidebar";
import Routing from "./Layouts/Routing";
import { Toaster } from "sonner";

const App = () => {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div className="flex-1 overflow-auto">
        <Routing />
      </div>

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            color: "#ffffff",
            background: "#000000",
          },
        }}
      />
    </div>
  );
};

export default App;