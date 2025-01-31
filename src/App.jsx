import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Nav from "./components/navbar/Nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
      AOS.init();
    }, []);
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000} // 2 seconds
        hideProgressBar={true} // Hide progress bar
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        theme="light" // Light theme
      />
      <div className="app-wrap">
        <Navbar />
        {/* <Nav /> */}
        <main className="page-wrapper">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
