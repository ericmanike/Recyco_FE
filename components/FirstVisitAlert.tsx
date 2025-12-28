import React, { useState, useEffect } from 'react';

export const FirstVisitPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    if (!hasVisited) {
        setTimeout(() => {
            setIsVisible(true);
        }, 6000); 
     
    }
  }, []);

  const handleOkClick = () => {
    localStorage.setItem('hasVisitedBefore', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-[#0000006d] bg-opacity-50 z-40" />
      
      {/* Popup */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 animate-fade-in">
          <div className="flex items-start mb-4">
            <svg className="w-6 h-6 text-green-600 mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Important Notice
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Recyco Platform is currently in beta. Some features may not work as expected, 
                and we are actively working to improve your experience.
              </p>
            </div>
          </div>
          <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-6">
            <p className="text-sm text-gray-700">
              We appreciate your patience as we continue to improve the platform. 
              Come back soon for updates.
            </p>
          </div>
          <button
            onClick={handleOkClick}
            className="cursor-pointer w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            I Understand, Continue
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </>
  );
};