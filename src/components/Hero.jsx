import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  AOS.init();
  return (
    <div id='hero'>

<main className="w-screen  md:h-screen h-[600px] relative ">
<div className="flex md:flex-row justify-center text-left p-6  flex-col relative  items-center" >
   {/* first hero animation */}
  <div className=" flex group md:mt-10 mt-0 items-center justify-center">
    <div className="flex flex-row p-8 items-center font-medium font-brico md:text-7xl pl-2 text-center group-hover:bg-[#E5F7FF] md:w-[490px] w-[220px] justify-center md:h-[152px] h-[39px] ">
<h1 className="tracking-wide md:text-[129px] relative text-center text-[53px] md:w-fit w-[300px] ">Meet,</h1>
 <div className="bg-[#EFEFEF] p-3 md:w-[80px] md:h-[80px] w-[34px] h-[34px]  rounded-full group-hover:bg-[#33BDFF]"></div>
 </div>
</div>
 {/* second hero animation */}
<div className="flex group md:mt-10 items-center justify-center">
 
  <div className="flex flex-row p-8 font-medium font-brico  md:text-7xl pl-2 text-center group-hover:bg-[#E5F8F0] md:w-[600px] justify-center  md:h-[152px] h-[39px] items-center">
<h1 className="md:text-[129px]  tracking-normal text-[53px]">  Connect 
</h1>
<div className="bg-[#EFEFEF] p-3 md:w-[80px] md:h-[80px] w-[34px] h-[34px]  rounded-full group-hover:bg-[#33C589]"></div>
 <div className="bg-[#EFEFEF] p-3 md:w-[80px] md:h-[80px] w-[34px] h-[34px] z-4 mx-[-18px] rounded-full group-hover:bg-[#33C589]"></div>
</div>
</div>


</div>
{/* third animation div for hero section */}
<div className="flex group md:mt-1 items-center justify-center " >
<div className="flex flex-row p-8 font-medium font-brico  md:text-7xl pl-2 text-center group-hover:bg-[#FFFAE5] md:w-[1020px] justify-center  md:h-[180px] h-[39px] items-center">
<h1 className="md:text-[120px]  tracking-normal text-[53px] text-center"> and get inspired </h1>
<div className="bg-[#EFEFEF] p-3 md:w-[152px] md:h-[80px] w-[34px] h-[34px]  rounded-full group-hover:bg-[#FFDA33]"></div>

</div>

</div>
{/* fourth section for hero animation  */}
<div className="flex group md:mt-4 mt-14 placeholder:items-center justify-center " >
<div className="flex flex-row p-8 font-medium font-brico  md:text-7xl pl-2 text-center group-hover:bg-[#FFF0E5] md:w-[1020px] justify-center  md:h-[180px] h-[39px] items-center">
<h1 className="md:text-[120px]  tracking-normal text-[53px] text-center"> In one location. </h1>
</div>
</div>
</main>
    </div>
  )
}

export default Hero