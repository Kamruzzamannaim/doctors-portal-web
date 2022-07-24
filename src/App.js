import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import About from './Pages/About/About';
import Appointment from "./Pages/Appointment/Appointment";
import AllUsers from "./Pages/Dashboard/AllUsers";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import Contact from './Pages/Home/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from "./Pages/Login/RequireAuth";
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
       <Route path="/appoinment" element={<RequireAuth><Appointment /></RequireAuth>} />
       <Route path='/dashboard' element={
       <RequireAuth>
        <Dashboard></Dashboard>
        </RequireAuth>}>
        <Route index element={<MyAppointments></MyAppointments>}></Route>
        <Route path='review' element={<MyReview></MyReview>}></Route>
        <Route path='allUsers' element={<AllUsers></AllUsers>}></Route>
       </Route>
   </Routes>
   <ToastContainer />
   
    </div>
  );
}

export default App;
