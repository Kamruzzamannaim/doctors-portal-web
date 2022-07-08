import { format } from "date-fns";
const AppointmentModal = ({treatment,date,setTreatment}) => {
    const{name,slots,_id}=treatment;
    const handleBooking=event=>{
      event.preventDefault();
      const slot=event.target.slot.value;
      console.log(slot,name,_id);
      setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-lg text-secondary">{name}</h3>
    <form onSubmit={handleBooking} class="grid grid-cols-1 gap-3 mt-2">
  <input type="text" disabled value={format(date,'PP')} class="input input-bordered" />
  <select name="slot" class="select select-bordered w-full">
  <option disabled selected>Select your slot</option>
  {slots.map(slot=><option>{slot}</option>)}
</select>
  <input type="text" name="name" placeholder="Your Name" class="input input-bordered" />
  <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered" />
  <input type="email" name="email" placeholder="email" class="input input-bordered" />
  <input type="submit" value="Submit" className="btn btn-secondary w-full" />
</form>
</div>
</div>
</div>
  );
};

export default AppointmentModal;