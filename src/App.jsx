import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="root-container">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
