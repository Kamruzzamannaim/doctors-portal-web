
const Service = ({service,setTreatment}) => {
    const{name,slots}=service
    return (
        <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-primary mx-auto">{name}</h2>
          <p className="text-center">{slots.length>0? `${slots[0]}`:<span className="text-red-500">Try another date</span>}</p>
          <p className='uppercase text-center'>{slots.length} {slots.length>1?'spaces available':'space available'}</p>
          <div class="card-actions justify-center">
            <label
            onClick={()=>setTreatment(service)} for="booking-modal"disabled={slots.length===0} class="btn  btn-primary uppercase">Book appoinment</label>
           

          </div>
        </div>
      </div>
    );
};

export default Service;