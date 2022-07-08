
const ServiceItem = ({img,title,details}) => {
    return (
        <div class="card  bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img} alt='img' />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{title}</h2>
          <p>{details}</p>
         
        </div>
      </div>
    );
};

export default ServiceItem;