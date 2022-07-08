import { format } from "date-fns";
import { useEffect, useState } from "react";
import AppointmentModal from "./AppointmentModal/AppointmentModal";
import Service from "./Service";

const AvailableAppointments = ({date}) => {
    const [services,setServices]=useState([]);
    const [treatment,setTreatment]=useState(null);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="px-12">
           <div>
           <h3 className='text-secondary text-center'>Available Services on {format(date,'PP')}</h3>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
services.map(service=><Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
            }
            {treatment && <AppointmentModal treatment={treatment} setTreatment={setTreatment}
            date={date}></AppointmentModal>}
           </div>
        </div>
    );
};

export default AvailableAppointments;