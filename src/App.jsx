import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
