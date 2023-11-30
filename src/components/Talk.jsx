import  { useEffect } from 'react';

const TawkToChat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/64df0c8c94cf5d49dc6b182e/1h83ki1sr';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    return () => {
      // Clean up: Remove the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []); // The empty array as the second argument makes this effect run once after mounting

  return null; // No need to render anything for this component
};

export default TawkToChat;
