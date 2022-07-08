import Cavity from '../../../assets/images/cavity.png';
import TeethWhite from '../../../assets/images/fluoride.png';
import Teeth from '../../../assets/images/whitening.png';
import ServiceItem from "./ServiceItem";

const Services = () => {
    return (
        <div>
            <div className="service-header text-center mt-32 my-8 ">
            <h3 className=' text-primary font-bold'>Our Services</h3>
            <h2 className='text-xl'>Services We Provide</h2>
            </div>
           <div className="services grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
           <ServiceItem img={Cavity} title="Fluoride Treatment" details="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"></ServiceItem>
            <ServiceItem img={Teeth} title="Cavity Filling" details="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"></ServiceItem>
            <ServiceItem img={TeethWhite} title="Teeth Whitening" details="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"></ServiceItem>
           </div>
        </div>
    );
};

export default Services;