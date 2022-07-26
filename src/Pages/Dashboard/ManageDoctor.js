import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading';
import DoctorRow from './DoctorRow';

const ManageDoctor = () => {
    const{data:doctors,isLoading,refetch}=useQuery(['doctors'],()=>fetch('http://localhost:5000/doctor',{
        method:'GET',
        headers:{
            'authorization':`bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res=>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'>Manage Doctor {doctors.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Specialty</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
  
      {
doctors.map((doctor,index)=><DoctorRow key={doctor._id}
doctor={doctor}
refetch={refetch}
index={index}></DoctorRow>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageDoctor;