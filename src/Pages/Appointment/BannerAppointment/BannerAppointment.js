

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../../assets/images/chair.png';
const BannerAppointment = ({date,setDate}) => {
   return (
        <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img src={chair} alt='chair' className="max-w-sm rounded-lg shadow-2xl" />
          <div className='lg:pr-28'>
           <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}></DayPicker>
          </div>
        </div>
      </div>
    );
};

export default BannerAppointment;