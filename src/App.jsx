import Routing from "./Routing/routing"
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