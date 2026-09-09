import { useEffect } from 'react';
import { HiX, HiInformationCircle } from 'react-icons/hi';

const Toast = ({ message, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed top-20 right-4 z-[9999] animate-in slide-in-from-right duration-300">
      <div className="bg-[#FFD100] border-2 border-black px-6 py-4 shadow-[6px_6px_0px_#000] flex items-center gap-4 max-w-md">
        <HiInformationCircle className="w-6 h-6 text-black flex-shrink-0" />
        <p className="text-black font-bold text-sm flex-1">{message}</p>
        <button
          onClick={onClose}
          className="text-black hover:text-black/70 transition-colors flex-shrink-0"
          aria-label="Close notification"
        >
          <HiX className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
