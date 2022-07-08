import Treatment from '../../../assets/images/treatment.png';
const ExcetionalDental = () => {
    return (
        <div class="hero min-h-screen  mt-36 mb-20 px-14">
  <div class="hero-content flex-col lg:flex-row">
    <img  src={Treatment}class="max-w-sm rounded-lg shadow-2x " alt="" />
    <div className='pl-28 '>
      <h1 class="text-5xl font-bold pr-48">Exceptional Dental Care, on Your Terms</h1>
      <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default ExcetionalDental;