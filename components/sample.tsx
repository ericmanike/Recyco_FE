import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Truck, Package } from 'lucide-react';

 


export default  function DriverCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const drivers = [
    { 
      id: 1, 
      name: "John Mensah", 
      rating: 4.8, 
      trips: 320, 
      vehicle: "Truck GH-2345",
      availability: "Available Now",
      image: "🚛"
    },
    { 
      id: 2, 
      name: "Ama Serwaa", 
      rating: 4.9, 
      trips: 450, 
      vehicle: "Van GH-5678",
      availability: "Available Now",
      image: "🚚"
    },
    { 
      id: 3, 
      name: "Kwame Osei", 
      rating: 4.7, 
      trips: 280, 
      vehicle: "Truck GH-9012",
      availability: "Busy",
      image: "🚛"
    },
    { 
      id: 4, 
      name: "Abena Addo", 
      rating: 5.0, 
      trips: 520, 
      vehicle: "Truck GH-3456",
      availability: "Available Now",
      image: "🚚"
    },
  ];

  const nextDriver = () => {
    setCurrentIndex((prev) => (prev + 1) % drivers.length);
  };

  const prevDriver = () => {
    setCurrentIndex((prev) => (prev - 1 + drivers.length) % drivers.length);
  };

  return (
    <div className=' w-[90%] p-4 flex justify-center items-center flex-col m-auto bg-green-300'>
      <h2 className="text-xl  md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
        Available Pickup Drivers
      </h2>
      
      <div className="relative w-full mx-auto">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform:`translateX(-${currentIndex * 100}%)` }}
          >
            {drivers.map((driver) => (
              <div key={driver.id} className="w-full shrink-0 px-2 md:px-4 h-[250px] md:h-[300px] flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-md p-4 md:p-5 flex flex-col md:flex-row items-center gap-4 w-1/2 md:h-70">
                  <div className="text-4xl md:text-5xl">{driver.image}</div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                      {driver.name}
                    </h3>
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold">{driver.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600 text-sm">
                        <Truck className="w-3 h-3" />
                        <span>{driver.trips} trips</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{driver.vehicle}</p>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                      driver.availability === "Available Now" 
                        ? "bg-green-100 text-green-700" 
                        : "bg-gray-100 text-gray-700"
                    }`}>
                      {driver.availability}
                    </span>
                  </div>
                  <div className='bg-amber-700'>
                  <button className="w-full md:w-auto bg-blue-600 text-white px-4 py-2 
                  rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors cursor-pointer">
                    Chat
                  </button>
                 </div>
                  

                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          onClick={prevDriver}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-white rounded-full p-1.5 md:p-2 shadow-lg hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-700" />
        </button>
        
        <button 
          onClick={nextDriver}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 bg-white rounded-full p-1.5 md:p-2 shadow-lg hover:bg-gray-100 transition-colors"
        >
          <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-700" />
        </button>
        
        <div className="flex justify-center gap-2 mt-4">
          {drivers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

       