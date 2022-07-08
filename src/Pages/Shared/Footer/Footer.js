import footer from "../../../assets/images/footer.png";
const Footer = () => {
    const d= new Date();
    let year= d.getFullYear();
    return (
       <div className="p-10" style={{background:`url(${footer})`,backgroundSize:'cover'}}>
         <footer class="footer ">
        <div>
          <span class="footer-title">Services</span> 
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div> 
        <div>
          <span class="footer-title">Company</span> 
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div> 
        <div>
          <span class="footer-title">Legal</span> 
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <div class="footer footer-center my-10 p-4 ">
  <div>
    <p>Copyright © {year} - All right reserved by Naim</p>
  </div>
</div>
       </div>
        
    );
};

export default Footer;