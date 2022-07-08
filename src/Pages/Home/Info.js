import Clock from '../../assets/icons/clock.svg';
import Location from '../../assets/icons/marker.svg';
import Phone from '../../assets/icons/phone.svg';
const Info = () => {
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 text-white'>
            
            <div className="card lg:card-side  bg-gradient-to-r from-secondary to-primary shadow-xl ">
                
                  <figure className='pl-5 '>  <img src={Clock} alt="" /></figure>
              
                <div className="card-body">
                   <h3 className='card-title '>Opening Hours</h3> 
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. !</p>
                </div>
            </div>
            <div className=" card lg:card-side bg-accent">
               
                   <figure className='pl-5 '> <img src={Location} alt="" /></figure>
              
                <div className="card-body  ">
                   <h3  className='card-title '>Visit our location</h3> 
                   <p>Brooklyn, NY 10036, United States</p>
                </div>
            </div>
            <div className=" card lg:card-side bg-gradient-to-r from-secondary to-primary shadow-xl">
                
                   <figure className='pl-5 '> <img src={Phone} alt="" /></figure>
               
                <div className="card-body ">
                   <h3  className='card-title'>Contact us now</h3> 
                   <p>+000 123 456789</p>
                </div>
            </div>
            
        </div>
    );
};

export default Info;