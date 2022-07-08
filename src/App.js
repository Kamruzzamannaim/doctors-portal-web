import { Route, Routes } from "react-router-dom";
import './App.css';
import About from './Pages/About/About';
import Appointment from "./Pages/Appointment/Appointment";
import Contact from './Pages/Home/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div className="max-w-[1500px] mx-auto">
   <Navbar></Navbar>
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appoinment" element={<Appointment />} />
   </Routes>
   <Footer></Footer>
    </div>
  );
}

export default App;
