import Sidebar from "./Layouts/Sidebar";
import Routing from "./Layouts/Routing";

const App = () => {
  return (
    <div className="flex w-full h-screen overflow-hidden">

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Routing />
      </div>
    </div>
  );
};

export default App;