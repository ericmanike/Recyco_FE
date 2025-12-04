import React from 'react';
import { MapPin, CheckCircle, AlertCircle, MessageSquare, Phone, Star, Package, } from 'lucide-react';
import Link from 'next/link';
export default function WastePickupCard() {
  const driver = {
    name: "Marcus Johnson",
    status: "active",
    currentLocation: "Oak Street District",
    pickupsCompleted: 247,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  };

  const isActive = driver.status === 'active';

  return (
   
    <div className=" w-[48%] md:w-[30%] min-h-fit   p-2 md:p-6
     bg-white rounded-2xl shadow-xl border-2 border-gray-200  flex-col gap-2
     cursor-pointer
      ">
       <Link href={`/orderPickup/${driver.name.replace(" ", "-").toLowerCase()}`} className='w-fit h-fit'>
      
      {/* Profile Section */}
      <div className="flex flex-col items-center  h-[60%]  relative">
        <img 
          src={driver.image} 
          alt={driver.name}
          className="h-[70%] min-h-[300px] w-full object-cover border-4 border-gray-100 shadow-md mb-3"
        />
         <div className=' flex absolute left-2 top-2 bg-green-500 px-2 py-1 rounded-[10px] text-white text-[12px]'> <MapPin  className='text-[gold]'/> 
         Location <br/>
          10km away
         </div> 
        <div className=" text-[12px] md:text-xl font-semibold text-gray-900 w-full flex justify-between ">{driver.name}  
            <div className={`text-green-500 font-semibold md:text-2xl text-[12px] `}>online</div></div>
      </div>
      <div className='border-b-2 border-gray-100 pb-1 my-2'>
        <h3 className='line-clamp-1 text-[12px] md:text-[18px]'>
         Experienced waste pickup driver with a strong commitment to timely and 
        efficient service. Known for excellent customer
        </h3>
        <span className='pr-5'>
         <span className='font-bold text-[12px] md:text-[18px]'>Completed:</span>  {driver.pickupsCompleted} pickups
       </span>
       
       <span>
         <span className='font-bold text-[12px] md:text-[18px]'>rating:</span>  {driver.rating} ⭐
       </span>

      </div>
 </Link>

      {/* Action Buttons */}
      <div className="flex gap-3 justify-between mt-1 ">
       <Link href={`/${driver.name.replace(" ", "-").toLowerCase()}`}>
        <button className="text-[9px] md:text-[18px] md:px-6 px-4 md:py-2 bg-green-600
         text-white rounded-lg font-medium
          hover:bg-green-700 transition-colors 
          flex items-center justify-center gap-2 shadow-md cursor-pointer ">
          Chat
        </button>
       </Link>
       <Link  href={`tel:+1234567890`}>
        <button className="px-3 md:px-6 text-[9px] md:text-[18px] py-3 border border-gray-300 text-gray-700
         rounded-lg font-medium hover:bg-blue-200 transition-colors 
         flex items-center justify-center gap-2 shadow-sm cursor-pointer">
          <Phone  />
          Call
        </button>
        </Link>
      </div>
    
   
    </div>
   
  );
}
