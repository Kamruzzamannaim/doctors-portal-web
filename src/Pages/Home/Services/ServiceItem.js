
const ServiceItem = ({img,title,details}) => {
    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt='img' />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
         
        </div>
      </div>
    );
};

export default ServiceItem;