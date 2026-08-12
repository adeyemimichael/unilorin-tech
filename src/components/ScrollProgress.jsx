import { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      if (documentHeight > 0) {
        const scrolled = (window.scrollY / documentHeight) * 100;
        setScrollPercentage(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[4px] z-[9990] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#FF0056] via-[#FFD100] to-[#00ADFF] transition-all duration-150 ease-out shadow-[0_0_10px_#FF0056]"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
