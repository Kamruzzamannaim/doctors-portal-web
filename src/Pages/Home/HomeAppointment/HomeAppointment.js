import Appointment from '../../../assets/images/appointment.png';
import Doctor from '../../../assets/images/doctor.png';

const HomeAppointment = () => {
    return (
        <section style={{
            background:`url(${Appointment})`
        }} className='flex px-12  items-center justify-center sm:p-5'>
            
                <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={Doctor} alt="" />
                </div>
                <div className='flex-1'>
                    <h3 className='text-xl text-primary'>Appointment</h3>
                    <h2 className='text-3xl font-semibold text-white'>Make an Appointment Today</h2>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore similique architecto, voluptatibus repellendus, repellat deleniti recusandae dolorem voluptates expedita nam repudiandae corrupti quidem illo error delectus officiis fugit aspernatur, est eligendi. Voluptatibus blanditiis voluptatem ipsa facilis incidunt quis, quam inventore!</p>
                    <button className="btn btn-primary  font-bold bg-gradient-to-r from-secondary to-primary mt-9">Get Started</button>
                </div>
        
        </section>
    );
};

export default HomeAppointment;