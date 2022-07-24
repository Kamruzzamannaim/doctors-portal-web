import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from 'react-toastify';
import auth from "../../../../firebase.init";
const AppointmentModal = ({treatment,date,setTreatment,refetch}) => {
    const{name,slots,_id}=treatment;
    const [user] = useAuthState(auth);
    const handleBooking=event=>{
      event.preventDefault();
      const slot=event.target.slot.value;
      
      const formattedDate=format(date,'PP');
      const booking={
        treatmentId:_id,
        treatment:name,
        date:formattedDate,
        slot,
        patient:user.email,
        patientName:user.displayName,
        phone:event.target.phone.value
      }
      fetch('https://infinite-ocean-10097.herokuapp.com/booking',{
        method:'POST',
        headers:{
          "Content-Type":'application/json'
        },
        body:JSON.stringify(booking)
      })
      .then(res=>res.json())
      .then(data=>{
       if(data.success){
        toast(`your appointment has been set ${formattedDate} at ${slot}`)
        refetch();
        setTreatment(null);
       }
       else{
        toast.error(`already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`)
       }
       
      })
      // to close the modal
      
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg text-secondary">{name}</h3>
    <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-2">
  <input type="text" disabled value={format(date,'PP')} className="input input-bordered" />
  <select name="slot" className="select select-bordered w-full">
  <option disabled defaultValue>Select your slot</option>
  {slots.map(slot=><option>{slot}</option>)}
</select>
  <input type="text" name="name" disabled value={user?.displayName||''} className="input input-bordered" />
  <input type="email" name="email" disabled value={user?.email||''} className="input input-bordered" />
  <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered" />
 <input type="submit" value="Submit" className="btn btn-secondary w-full" />
</form>
</div>
</div>
</div>
  );
};

export default AppointmentModal;