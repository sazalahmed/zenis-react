import { Outlet } from "react-router-dom";
import HeaderArea from "./components/headerArea/HeaderArea";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HeaderArea />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
