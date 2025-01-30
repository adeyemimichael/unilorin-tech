
import React, { useState } from 'react';
const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };
return (
<div>
<section className="section-1 relative md:top-[200px]  " id="about">
<div className="bg-[#fff] md:w-screen md:h-screen md:bottom-[266px] relative" data-aos="zoom-in" data-aos-delay="300">
<div className="md:w-[1400px] w-screen md:h-[500px] h-fit  flex  flex-col md:flex-row">
<div className="md:w-[100%] w-screen">
  <h1 className=" font-brico font-medium md:text-6xl text-[32px]  relative md:top-[126px] md:left-[90px] top-[px] left-[4px] m-2 md:p-4 pl-2 pr-4 pb-2 md:w-[543px] md:h-[204px] w-fit h-fit ">What is Unilorin Tech Summit?</h1>

  </div>
<div className="md:w-[100%] md:top-[120px] relative md:m-0 m-2 leading-8 w-screen " id="know-Us">
 <p className="md:p-4  p-4 font-normal md:text-[24px] text-[16px]">Welcome to the Unilorin Tech Summit, a prestigious annual tech extravaganza hosted right within the vibrant heart of Nigeria`s Unilorin University, home to an astounding 40,000+ students.</p>
<p className="md:p-4 p-4 font-normal md:text-[24px] text-[16px] ">Picture this: Founders, Business Leaders, Tech Enthusiasts, and Entrepreneurs all converging for a tech fiesta where we unlock the secrets to thriving in the ever-evolving Tech Ecosystem. </p>
<p className="md:p-4  p-4 font-normal md:text-[24px] text-[16px]"> We`re here to equip you with the skills to ride the tech wave and make a global impact – all while having a blast!</p>

{isExpanded && (
        <p>
          This is the additional content that will be shown when the user clicks the "Read More" button. It can include more details about the team, mission, or history.
        </p>
      )}
      <button onClick={toggleContent}>
       
      </button>

<button className="bg-[#000] text-[#fff] font-brico font-normal    md:pl-6 md:pr-6 md:pt-3  pr-4 pl-4 pt-2 pb-2 md:pb-3 relative left-[10px] top-[10px] hover:bg-zinc-500 "> {isExpanded ? 'Read Less' : 'Read More'}</button>
</div>
</div>
<div className="relative  md:top-[100px] flex  items-center content-fit w-screen md:mb-[180px]">
  <svg width="1728" height="" viewBox="0 0 1728 407" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-fit">
<path d="M1376.8 227.923L1376.45 228.275V227.923H1376.8Z" fill="#00B66C"/>
<path d="M685.19 221.799L552.59 354.818C484.898 422.723 376.312 424.294 306.532 359.88L564.771 101L685.19 221.799Z" fill="#973AE0"/>
<path d="M0 236H364.633C360.809 331.097 282.947 407 187.357 407H0V236Z" fill="#00ADFF"/>
<path d="M750.804 230C848.334 230 927.611 309.189 927.611 407H573.997C573.997 309.189 653.273 230 750.804 230Z" fill="#FFD100"/>
<path d="M1099.42 253.368L848.716 -0.0682983L722.503 127.52L973.206 380.956L1099.42 253.368Z" fill="#FF0056"/>
<path d="M1406.44 193.954L1374.42 226.397H1374.08V226.744L1221.86 380.976C1187.61 415.675 1131.96 415.675 1097.55 380.976C1080.42 363.627 1071.86 340.9 1071.86 317.999C1071.86 295.272 1080.42 272.372 1097.55 255.023L1282.13 68L1406.44 193.954Z" fill="#00B66C"/>
<path d="M1728 317.5C1728 342.274 1718.25 364.605 1702.34 380.83C1686.43 397.056 1664.54 407 1640.25 407H1379.39V228.349L1379.74 228H1640.25C1688.66 228 1728 268.127 1728 317.5Z" fill="#FF6B00"/>
<path d="M1376.8 227.923L1376.45 228.275V227.923H1376.8Z" fill="#FF6B00"/>
</svg>
</div>
</div>
 
</section> 
  
</div>
)
}

export default About;