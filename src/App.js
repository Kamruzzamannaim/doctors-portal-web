import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import About from './Pages/About/About';
import Appointment from "./Pages/Appointment/Appointment";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import AllUsers from "./Pages/Dashboard/AllUsers";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ManageDoctor from "./Pages/Dashboard/ManageDoctor";
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import Payment from "./Pages/Dashboard/Payment";
import Contact from './Pages/Home/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAdmin from "./Pages/Login/RequireAdmin";
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
        <Route path='allUsers' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
        <Route path='addDoctor' element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
        <Route path='manageDoctor' element={<RequireAdmin><ManageDoctor></ManageDoctor></RequireAdmin>}></Route>
        <Route path='payment/:id' element={<Payment></Payment>}></Route>
       </Route>
   </Routes>
   <ToastContainer />
   
    </div>
  );
}

export default App;
