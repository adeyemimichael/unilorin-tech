import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Highlight = () => {
  const settings = {
    arrows: true,
      dots: false,
      slidesToShow: 3,
      autoplay:false,
      speed: 900,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <div className="  md:w-screen md:h-fit p-20 h-fit  ">
 <h2 className='font-brico md:font-semibold font-normal text-center md:text-[72px] text-[32px] p-8'> Highlights for UTS 2022</h2>
  <div className="w-full ">
 
      <Slider {...settings}>
        <div className=" flex justify-center items-center text-white text-center slider bg-[#FFD100] md:w-[200px] md:h-[600px] w-[200px] h-[397px]   ">

          <h3>1</h3>
        </div>
        <div className=" flex justify-center items-center slider text-white text-center bg-[#FFD100]  md:w-[200px] md:h-[600px] w-[200px] h-[397px] mx-10">
          <h3>2</h3>
        </div>
        <div className=" flex justify-center items-center slider text-white text-center  bg-[#FFD100] md:w-[200px] md:h-[600px] w-[200px] h-[397px] ml-10">
          <h3>3</h3>
        </div>
        <div className=" flex justify-center items-center text-white text-center slider  bg-[#FFD100]  md:w-[200px] md:h-[600px] w-[200px] h-[397px]  " >
          <h3>4</h3>
        </div>
        <div className=" flex justify-center items-center text-white text-center slider  bg-[#FFD100]  md:w-[200px] md:h-[600px] w-[200px] h-[397px] ">
          <h3>5</h3>
        </div>
        <div className=" flex justify-center items-center text-white text-center slider  bg-[#FFD100]  md:w-[200px] md:h-[600px] w-[200px] h-[397px] ">
          <h3>6</h3>
        </div>
      </Slider>
      </div>
 </div>
    </div>
  )
}

export default Highlight