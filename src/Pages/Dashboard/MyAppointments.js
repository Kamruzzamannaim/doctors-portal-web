import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const[myAppointments,setMyAppointments]=useState([]);
    const [user]=useAuthState(auth);
    const navigate= useNavigate()
 
    useEffect(()=>{
        if(user){fetch(`https://infinite-ocean-10097.herokuapp.com/booking?patient=${user?.email}`,{
        method:"GET",
        headers:{
          "authorization":`bearer ${localStorage.getItem('accessToken')}`
        }
        })
        .then(res=>{
          if(res.status===401){
            console.log('unauthorized hosse');
            navigate('/');
          }
          else if(res.status===403){
            console.log('forbidden hosse');
            navigate('/');
            localStorage.removeItem('accessToken')
            signOut(auth);
          }
          return res.json()})
        .then(data=>setMyAppointments(data))}
    },[user,navigate])
   return (
        <div>
            <h2>my appointments {myAppointments.length}</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
 
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
      
     {myAppointments.map((a,index)=> <tr key={index}>
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