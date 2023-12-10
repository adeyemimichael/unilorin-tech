

const Partners = () => {
  const handleMailClick = () => {
    const email = "Contact@unilorintechsummit.org";
    const subject = " ";
    const body = "";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };
  return (
    <div id="partners"> {/* section for partners  */}
    <div className="bg-[#fff] md:w-screen md:h-[550px]  relative top-[100px] w-screen h-[700px] " data-aos="zoom-in"  data-aos-delay="300">
     <div className="flex justify-center items-center ">
     <h1 className="font-brico md:text-[48px] text-[24px] md:w-[460px] md:h-[102px] relative md:top-[40px] top-[26px] md:left-[50px] font-semibold text-center flex justify-center items-center" data-aos="zoom-in" data-aos-delay="400">Meet our Partners</h1>
     </div>
       
      <div className="flex md:flex-row  md:flex-nowrap flex-wrap relative md:top-[60px] justify-center items-center mb-20" data-aos="zoom-in" data-aos-delay="500">
      <div className="md:w-[300px] relative w-[200px] h-[90px] flex justify-center items-center md:text-[16px]  md:h-[166px] border-2 border-dashed border-[#66CEFF] text-center  rounder-sm mx-4 font-brico font-medium top-[30px] md:mt-0 mt-6 cursor-pointer hover:shadow-lg" onClick={handleMailClick}>Claim this space </div>
      <div className="md:w-[300px] relative w-[200px] h-[90px] flex justify-center items-center md:text-[16px] md:h-[166px] border-2 border-dashed border-[#66CEFF] text-center rounder-sm mx-4 font-brico font-medium top-[30px] md:mt-0 mt-8 cursor-pointer hover:shadow-lg" onClick={handleMailClick}>Claim this space </div>
      <div className="md:w-[300px] relative w-[200px] h-[90px] flex justify-center  items-center md:text-[16px] md:h-[166px] border-2 border-dashed border-[#66CEFF] text-center  rounder-sm mx-4 font-brico font-medium top-[30px] md:mt-0 mt-8 cursor-pointer hover:shadow-lg" onClick={handleMailClick}>Claim this space </div>
      <div className="md:w-[300px] relative w-[200px] h-[90px] flex justify-center  items-center md:text-[16px] md:h-[166px] border-2 border-dashed border-[#66CEFF] text-center rounder-sm mx-4 font-brico font-medium top-[30px] md:mt-0 mt-10 cursor-pointer hover:shadow-lg" onClick={handleMailClick}>Claim this space </div>
      </div>
      </div></div>
  )
}

export default Partners