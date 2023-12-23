import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image0 from "../assets/images/anu.webp";
import image1 from "../assets/images/att1.webp";
import image2 from "../assets/images/iss.webp";
import image3 from "../assets/images/att4.webp";
import image4 from "../assets/images/leye.jpg";
import image5 from "../assets/images/coop.jpg";
import image6 from "../assets/images/atted.jpg";
 
const Highlight = () => {
  const settings = {
    arrows: true,
    className: "center",
      centerMode: true,
      infinite: true,
     
      dots: false,
      slidesToShow: 3,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear",
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  };
  
  return (
    <div >
      <div className="  md:w-screen md:h-fit  h-fit  " id="highlight" >
 <h2 className='font-brico md:font-semibold font-normal text-center md:text-[72px] text-[32px] p-8 w-screen '> Highlights for UTS 2023</h2>

  <div className="md:w-full  w-screen h-fit relative  md:left-0  left-0  ">
  
      <Slider {...settings}>
        <div className=" flex justify-center items-center overflow-hidden text-white text-center  bg-gray-300 md:w-[200px] md:h-[300px]  w-[300px] h-[240px]   ">
<img src={image0} alt="" className="w-full h-full object-fit " />
        </div>
        <div className=" flex justify-center items-center  text-white text-center bg-gray-300  md:w-[200px] md:h-[300px]  w-[300px] h-[240px] mx-10">
        <img src={image6} alt="" className="w-full h-full object-fit " />
        </div>
        <div className=" flex justify-center items-center  text-white text-center  bg-gray-300  md:w-[200px] md:h-[300px]  w-[300px] h-[240px] ml-10">
        <img src={image1} alt="" className="w-full h-full object-fit " />
        </div>
        <div className=" flex justify-center items-center text-white text-center slider  bg-gray-300   md:w-[200px] md:h-[300px] w-[300px] h-[240px]  " >
        <img src={image2} alt="" className="w-full h-full object-fit " />
        </div>
        <div className=" flex justify-center items-center text-white text-center slider  bg-gray-300 md:w-[200px] md:h-[300px]  w-[300px] h-[240px] ">
        <img src={image4} alt="" className="w-full h-full object-fit " />
        </div>
        <div className=" flex justify-center items-center text-white text-center slider  bg-gray-300   md:w-[200px] md:h-[300px] w-[300px] h-[240px] ">
        <img src={image5} alt="" className="w-full h-full object-fit " />
        </div>
        <div className=" flex justify-center items-center text-white text-center slider  bg-gray-300  md:w-[200px] md:h-[300px] w-[300px] h-[240px]  ">
        <img src={image3} alt="" className="w-full h-full object-fit " />
        </div>
      </Slider>
      </div>
 </div>
    </div>
  )
}

export default Highlight