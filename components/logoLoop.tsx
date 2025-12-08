import React from 'react';

interface Sponsor {
  id: string;
  name: string;
  icon: string;
}

const SponsorLogoLoop: React.FC = () => {
  const sponsors: Sponsor[] = [
    { id: '1', name: 'Savannah water', icon: '💦' },
    { id: '2', name: 'Savannah water', icon: '💦' },
   { id: '3', name: 'Savannah water', icon: '💦' },
   { id: '4', name: 'Savannah water', icon: '💦' },
   { id: '5', name: 'Savannah water', icon: '💦' },
   { id: '6', name: 'Savannah water', icon: '💦' },
  ];

  return (
   
        <div className="relative overflow-hidden bg-green-500 rounded-2xl py-8 shadow-inner">
          <div className="flex animate-scroll hover:pause">
            {/* First set */}
            {sponsors.map((sponsor) => (
              <div
                key={`first-${sponsor.id}`}
                className="shrink-0 w-40 md:w-52 h-25 md:h-32 mx-8 flex items-center justify-center bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 p-5"
              >
                <div className="flex flex-col items-center justify-center text-purple-600 font-semibold text-center">
                  <div className="text-5xl mb-2">{sponsor.icon}</div>
                  <div className="text-sm">{sponsor.name}</div>
                </div>
              </div>
            ))}
           
          </div>










          <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
          display: flex;
          width: fit-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    
        </div>

        

      
  );
};

export default SponsorLogoLoop;