import footer from "../../../assets/images/footer.png";
const Footer = () => {
    const d= new Date();
    let year= d.getFullYear();
    return (
       <div className="p-10" style={{background:`url(${footer})`,backgroundSize:'cover'}}>
         <footer className="footer ">
        <div>
          <span className="footer-title">Services</span> 
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <div className="footer footer-center my-10 p-4 ">
  <div>
    <p>Copyright © {year} - All right reserved by Naim</p>
  </div>
</div>
       </div>
        
    );
};

export default Footer;