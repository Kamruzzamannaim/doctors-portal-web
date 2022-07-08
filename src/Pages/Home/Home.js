import Info from "../Home/Info";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import ExcetionalDental from "./ExcetionalDental/ExcetionalDental";
import HomeAppointment from "./HomeAppointment/HomeAppointment";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
          <Banner></Banner> 
          <Info></Info>
          <Services></Services>
          <ExcetionalDental></ExcetionalDental>
          <HomeAppointment></HomeAppointment>
          <Testimonials></Testimonials>
          <Contact></Contact>
        </div>
    );
};

export default Home;