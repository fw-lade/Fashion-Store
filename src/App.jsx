import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Nav from "./components/navbar/Nav";

function App() {
  return (
    <div className="app-wrap">
      {/* <Navbar /> */}
      <Nav/>
      <main className="page-wrapper">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
