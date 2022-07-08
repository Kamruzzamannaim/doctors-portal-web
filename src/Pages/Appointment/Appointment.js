import { useState } from "react";
import AvailableAppointments from "./AvailableAppointments/AvailableAppointments";
import BannerAppointment from "./BannerAppointment/BannerAppointment";

const Appointment = () => {
    const [date,setDate]=useState(new Date())
    return (
        <div>
            <BannerAppointment date={date} setDate={setDate}></BannerAppointment>
            <AvailableAppointments date={date} ></AvailableAppointments>
        </div>
    );
};

export default Appointment;