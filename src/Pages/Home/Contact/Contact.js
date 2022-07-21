import bg from '../../../assets/images/appointment.png';
const Contact = () => {
    return (
    <div>
        <div  className="contact-container" style={{
            background:`url(${bg})`
        }} >
            <div   className="contact mx-auto py-16  w-full max-w-sm">
               <div className="contact-headings text-center mb-10 ">
               <h3 className="font-bold text-primary pb-3">Contact Us</h3>
                <h2 className="text-4xl text-white">Stay connected with us</h2>
               </div>
                <form className='flex flex-col' action="">
                <input type="text"className="input" name="" id=""placeholder="Email address" />
                <input className='input my-4' type="text" name="" id=""placeholder="Subject" />
                <textarea className='input' placeholder="Your message" name="" id=""></textarea>
                <div className="form-control mt-6">
              <button className="btn btn-primary w-1/3 mx-auto mb-16">Submit</button>
              </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Contact;