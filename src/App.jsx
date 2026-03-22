import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="root-container">
      <div className="relative">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default App;
