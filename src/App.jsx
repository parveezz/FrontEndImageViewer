import Sidebar from "./Layouts/Sidebar";
import Routing from "./Layouts/Routing";

const App = () => {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Routing />
      </div>
    </div>
  );
};

export default App;