import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import About from './Pages/About/About';
import Appointment from "./Pages/Appointment/Appointment";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import Contact from './Pages/Home/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Navbar from './Pages/Shared/Navbar/Navbar';
function App() {
  
  return (
    <div className="max-w-[1500px] mx-auto">
   <Navbar></Navbar>
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup></Signup>} />
       <Route path="/appoinment" element={<Appointment />} />
       <Route path='/dashboard' element={<Dashboard></Dashboard>}>
        <Route index element={<MyAppointments></MyAppointments>}></Route>
        <Route path='review' element={<MyReview></MyReview>}></Route>
       </Route>
   </Routes>
   <ToastContainer />
   
    </div>
  );
}

export default App;
