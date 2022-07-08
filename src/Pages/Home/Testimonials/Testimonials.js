import Quotation from '../../../assets/icons/quote.svg';
import People1 from '../../../assets/images/people1.png';
import People2 from '../../../assets/images/people2.png';
import People3 from '../../../assets/images/people3.png';
import SingleTestimonial from './SingleTestimonial';
const Testimonials = () => {
    const userReviews=[
        {
            _id:1,
            img:People1,
            name:"Harry",
            location:"california",
            description:" It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum pas"
        },
        {
            _id:2,
            img:People2,
            name:"Navy",
            location:"california",
            description:" but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum pas"
        },
        {
            _id:3,
            img:People3,
            name:"rahi",
            location:"california",
            description:"  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum pas"
        }
    ]
    return (
        <div className='px-12 my-28'>
          <div className="testimonial flex justify-between">
              
           <div className="testimonial-info">
           <h3 className='text-primary font-bold'>Testimonial</h3>
            <h2 className="text-4xl ">What Our Patients Says</h2>
           </div>
           <div className="img">
            <img className='w-24 lg:w-48' src={Quotation} alt="" />
          </div>
           </div>
         <div className="testimonaials  grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {
userReviews.map(review=><SingleTestimonial key={review._id} data={review}></SingleTestimonial>)
            }
         </div>
        </div>
    );
};

export default Testimonials;