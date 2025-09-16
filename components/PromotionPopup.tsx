import React, { useState, useEffect } from 'react';

interface PromotionPopupProps {
  onClose: () => void;
}

export const PromotionPopup: React.FC<PromotionPopupProps> = ({ onClose }) => {
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    // When the timer hits zero, close the popup.
    if (timeLeft <= 0) {
      onClose();
      return;
    }

    // Set up an interval to decrement the time every second.
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    // Clean up the interval when the component unmounts or timeLeft changes.
    return () => clearInterval(timer);
  }, [timeLeft, onClose]);

  const progressPercentage = (timeLeft / 5) * 100;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300"
      aria-modal="true"
      role="dialog"
      aria-labelledby="popup-title"
    >
      <div className="bg-slate-800 rounded-2xl shadow-2xl p-6 md:p-8 max-w-md w-full mx-4 border-2 border-amber-400/50 transform transition-all duration-300 scale-100 opacity-100">
        <div className="text-center">
          <h2 id="popup-title" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">
            Limited Time Offer!
          </h2>
          <p className="text-slate-300 mt-3 text-lg">
            Claim an exclusive bonus, available only for the next few seconds!
          </p>
          
          <div className="my-6">
             <a
                href="https://bonus.1385bets10.com/"
               // onClick={(e) => {
               //     e.preventDefault();
               //     onClose();
               // }}
                className="w-full inline-block text-center rounded-lg px-6 py-4 text-xl font-bold text-slate-900 bg-gradient-to-r from-amber-400 to-yellow-500 shadow-lg transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-300/50"
              >
                Claim Now!
              </a>
          </div>

          <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden mt-4" title="Time remaining">
            <div
              className="bg-gradient-to-r from-amber-400 to-red-500 h-3 rounded-full transition-all duration-1000 linear"
              style={{ width: `${progressPercentage}%` }}
              role="progressbar"
              aria-valuenow={timeLeft}
              aria-valuemin={0}
              aria-valuemax={5}
              aria-label={`Time left: ${timeLeft} seconds`}
            ></div>
          </div>
          <p className="text-slate-400 text-sm mt-2" aria-live="polite">
            Offer expires in <span className="font-bold text-white">{timeLeft}</span> seconds
          </p>
        </div>
      </div>
    </div>
  );
};
