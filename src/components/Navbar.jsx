import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import navbarLogo from '../assets/Navbar.svg';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Highlights", href: "/#highlight" },
    { name: "Partners", href: "/#partners" },
     { name: "Sponsors", href: "#sponsors" },
    { name: "Contact", href: "#ticket" },
    // { name: "Team", href: "/team" },
    // { name: "Admin Portal", href: "/admin" },
  ];

  return (
    <header className="w-full pt-4 pb-2 px-2 md:px-6 sticky">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Original Logo - Unilorin Tech Summit */}
        <Link to="/" className="flex items-center group">
          <img 
            src={navbarLogo} 
            alt="Unilorin Tech Summit Logo" 
            className="h-10 md:h-12 w-auto object-contain cursor-pointer"
          />
        </Link>

        {/* Center Nav Capsule - Desktop */}
        <nav className="hidden lg:flex items-center bg-white/90 backdrop-blur-md rounded-full px-8 py-3 shadow-sm border border-black/5">
          <ul className="flex items-center gap-6">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                {link.href.startsWith("/") && !link.href.includes("#") ? (
                  <Link
                    to={link.href}
                    className="text-[#14382C] hover:text-emerald-700 font-semibold text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="text-[#14382C] hover:text-emerald-700 font-semibold text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href="https://techclaritycoach.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="flex items-center bg-[#14382C] hover:bg-[#1c4d3d] text-white rounded-full pl-6 pr-2 py-2.5 text-sm font-semibold transition-all duration-300 shadow-md group"
          >
            <span>Get Ticket</span>
            <span className="ml-3 w-8 h-8 rounded-full bg-[#BFD9FB] flex items-center justify-center text-[#14382C] group-hover:translate-x-0.5 transition-transform">
              <HiArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-full bg-white text-[#14382C] shadow-sm border border-black/5"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 bg-white rounded-3xl p-6 shadow-xl border border-black/5 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300 z-50">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                {link.href.startsWith("/") && !link.href.includes("#") ? (
                  <Link
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-[#14382C] hover:text-emerald-700 font-semibold text-base"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-[#14382C] hover:text-emerald-700 font-semibold text-base"
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <a
            href="https://techclaritycoach.vercel.app"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between bg-[#14382C] text-white rounded-full px-6 py-3 text-sm font-semibold"
          >
            <span>Get Ticket</span>
            <span className="w-8 h-8 rounded-full bg-[#BFD9FB] flex items-center justify-center text-[#14382C]">
              <HiArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;