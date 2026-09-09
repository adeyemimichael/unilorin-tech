import {  FaLinkedinIn } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { FiTwitter, FiInstagram } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleMailClick = () => {
    const email = "partnerships@unilorintechsummit.org";
    const subject = " ";
    const body = "";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };
  return (
    <div id="footer">  {/* footer section */}
    <footer className="bg-[#322355] w-screen object-contain">
      
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#D5B0F3] mb-3 font-brico uppercase">
            Get in Touch
          </h3>
          <p className="text-[#D5B0F3]/80 font-medium text-sm md:text-base mb-6">
            Have questions or want to partner with us? We'd love to hear from you!
          </p>
          <a
            href="mailto:partnerships@unilorintechsummit.org"
            className="inline-flex items-center gap-3 bg-[#00ADFF] text-white font-bold text-sm md:text-base px-8 py-4 border-2 border-white hover:bg-[#FFD100] hover:text-black transition-all duration-300 shadow-[4px_4px_0px_#fff] hover:shadow-[6px_6px_0px_#fff] hover:translate-x-[-2px] hover:translate-y-[-2px] uppercase tracking-wider"
          >
            <AiOutlineMail size={20} />
            partnerships@unilorintechsummit.org
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t-2 border-[#D5B0F3]/20"></div>

      <div className="flex justify-between items-center flex-start md:flex-row flex-col">
        <div className="flex items-center gap-3 md:p-10 p-8">
          <img 
            src="/cu.PNG" 
            alt="Unilorin Christian Union" 
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
          <h1 className="text-[#D5B0F3] font-brico font-bold text-[16px] md:text-[16px]">
            Powered by Unilorin Christian Union
          </h1>
        </div>
        <ul className="flex justify-between gap-[20px] p-10 mx-10 text-[#D5B0F3] font-brico font-semibold">
          <Link to='https://www.linkedin.com/company/unilorin-tech-summit/' target="_blank" rel="noreferrer">
            <FaLinkedinIn size={24} className="hover:text-[#fff] cursor-pointer"/>
          </Link>
          <Link to='https://instagram.com/unilorintechsummit/' target="_blank" rel="noreferrer">
            <FiInstagram size={24} className="hover:text-[#fff] cursor-pointer"/>
          </Link>
          <Link to='https://twitter.com/Uiltechsummit' target="_blank" rel="noreferrer">
            <FiTwitter size={24} className="hover:text-[#fff] cursor-pointer"/>
          </Link>
          <Link onClick={handleMailClick} target="_blank" rel="noreferrer">
            <AiOutlineMail size={24} className="hover:text-[#fff] cursor-pointer"/>
          </Link>
        </ul>
      </div>
    <div className="relative  md:top-[30px] top-[10px] flex  items-center content-fit w-screen md:h-[410px] bottom-[100px] p-2 ">
<svg width="1729" height="" viewBox="0 0 1729 411" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[100%] overflow-hidden ">
<g clipPath="url(#clip0_170_2249)">
<path d="M684.29 222.295L551.955 356.306C484.398 424.718 376.029 426.3 306.388 361.406L564.112 100.596L684.29 222.295Z" fill="#973AE0"/>
<path d="M0.209961 236.188H364.566C360.745 332.036 282.942 408.538 187.424 408.538H0.209961V236.188Z" fill="#00ADFF"/>
<path d="M749.936 229.682C847.364 229.682 926.557 309.701 926.557 408.538V407.307H573.315V408.538C573.315 309.701 652.508 229.682 749.936 229.682Z" fill="#FFD100"/>
<path d="M1097.72 253.367L847.452 -0.0683594L721.458 127.52L971.727 380.956L1097.72 253.367Z" fill="#FF0056"/>
<path d="M1407.1 195.036L1374.62 227.923H1374.27V228.275L1219.88 384.62C1185.15 419.793 1128.71 419.793 1093.8 384.62C1076.43 367.033 1067.75 343.995 1067.75 320.781C1067.75 297.742 1076.43 274.528 1093.8 256.941L1281.01 67.3569L1407.1 195.036Z" fill="#00B66C"/>
<path d="M1374.62 227.923L1374.27 228.275V227.923H1374.62Z" fill="#00B66C"/>
<path d="M1728.21 318.142C1728.21 343.115 1718.31 365.626 1702.16 381.982C1686.01 398.337 1663.78 408.362 1639.12 408.362H1374.27V228.275L1374.62 227.923H1639.12C1688.27 227.923 1728.21 268.372 1728.21 318.142Z" fill="#FF6B00"/>
<path d="M1374.62 227.923L1374.27 228.275V227.923H1374.62Z" fill="#FF6B00"/>
</g>
<defs>
<clipPath id="clip0_170_2249">
<rect width="1728" height="411" fill="white" transform="translate(0.209961)"/>
</clipPath>
</defs>
</svg>

  </div>
    </footer></div>
  )
}

export default Footer