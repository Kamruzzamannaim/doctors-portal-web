
const Service = ({service,setTreatment}) => {
    const{name,slots}=service
    return (
        <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-primary mx-auto">{name}</h2>
          <p className="text-center">{slots.length>0? `${slots[0]}`:<span className="text-red-500">Try another date</span>}</p>
          <p className='uppercase text-center'>{slots.length} {slots.length>1?'spaces available':'space available'}</p>
          <div className="card-actions justify-center">
            <label
            onClick={()=>setTreatment(service)} htmlFor="booking-modal"disabled={slots.length===0} className="btn  btn-primary uppercase">Book appoinment</label>
           

          </div>
        </div>
      </div>
    );
};

export default Service;