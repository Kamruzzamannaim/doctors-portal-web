
const singleTestimonial = ({data}) => {
    const {img,name,description,location}= data;
    return (
        <div class="card  bg-base-100 shadow-xl pb-10">
        <div class="card-body">
         
          <p>{description}</p>
        </div>
       <div className="reviewer flex pl-8 items-center">
       <div class="avatar">
  <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
  <figure><img src={img} alt="" /></figure> 

  </div>
</div>
       <div className="info pl-4 ">
       <h2 class="card-title">{name}</h2>
       <p>{location}</p>
       </div>
       </div>
      </div>
    );
};

export default singleTestimonial;