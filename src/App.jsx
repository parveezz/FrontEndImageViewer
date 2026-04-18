import Routing from "./Routing/Routing.jsx";
import { Toaster } from "react-hot-toast";

const App = () => {

  return (
    <>
      <Toaster position="top-right" />
      <Routing />
    </>
  )
}

export default App