import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useState } from "react";
import Loading from "../../Shared/Loading";
import AppointmentModal from "./AppointmentModal/AppointmentModal";
import Service from "./Service";

const AvailableAppointments = ({date}) => {
    // const [services,setServices]=useState([]);
    const [treatment,setTreatment]=useState(null);
    const formattedDate=format(date,'PP');
const{data: services,isLoading,refetch}=useQuery(['services',formattedDate],()=>fetch(`https://infinite-ocean-10097.herokuapp.com/available?date=${formattedDate}`).then(res=>res.json())
)

if(isLoading){
    return <Loading></Loading>
}
    return (
        <div className="px-12">
           <div>
           <h3 className='text-secondary text-center'>Available Services on {format(date,'PP')}</h3>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
services?.map(service=><Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
            }
            {treatment && <AppointmentModal 
            treatment={treatment} 
            setTreatment={setTreatment}
            date={date}
            refetch={refetch}></AppointmentModal>}
           </div>
        </div>
    );
};

export default AvailableAppointments;