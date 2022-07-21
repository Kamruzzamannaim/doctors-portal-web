import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const[myAppointments,setMyAppointments]=useState([]);
    const [user]=useAuthState(auth);
 
    useEffect(()=>{
        if(user){fetch(`http://localhost:5000/booking?patient=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setMyAppointments(data))}
    },[user])
    

   
    return (
        <div>
            <h2>my appointments {myAppointments.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
 
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Treatment</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
      
     {myAppointments.map(a=> <tr>
        <th></th>
        <td>{a.patientName}</td>
        <td>{a.date}</td>
        <td>{a.treatment}</td>
        <td>{a.slot}</td>
      </tr>)}
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointments;