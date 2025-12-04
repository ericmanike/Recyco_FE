'use client';
import React, { useState, useEffect, useRef} from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { X } from 'lucide-react';


interface NotificationsPanelProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}





const NotificationsPanel: React.FC<NotificationsPanelProps> = ({ isOpen, setIsOpen}) => {

  const searchParams = useSearchParams();
  const router = useRouter();

 const categories = ["All", "Your listings", "Chats", "Reward"];
 const category = searchParams.get("category") || "All";

  const setFilter = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", value);
    router.push(`?${params.toString()}`);
  };


  
 


  const panelRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
      setIsOpen(false);
      console.log("Clicked outside");
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);








  return (
    <div className={`    ${isOpen ? 'translate-x-0 ' : 'translate-x-full'} backdrop-blur-md w-full md:w-[40%] h-screen  overflow-y-auto bg-[#ffffff] fixed right-0
    scrollbar-hide  z-50 top-0 transition-all duration-800 float-right ease-in-out shadow-lg  `} ref={panelRef}>

   <div className='flex justify-between text-2xl'>  
   
    <h2 className="p-2 font-bold text-black">Notifications</h2>


    <button className="p-3 transition cursor-pointer rounded-[59%] bg-gray-300 hover:bg-gray-400  m-3 "  onClick={()=>setIsOpen(false)}>
      <X size={24} className="text-red-500 hover:text-red-600 " strokeWidth={2} />
    </button>
    </div>

    <div className='w-[90%] flex justify-around items-center font-bold gap-4'>

    {categories.map((cat) => (
    <button className={`py-2 px-3 transition
     cursor-pointer rounded-[10px]
      ${category === cat ? 'bg-green-400 text-white' : ''}`} 
      onClick={()=>setFilter(cat)}  key={cat}>
   {cat}
    </button>
    ))}

    
    </div>
    <hr className='my-4'/>






     
    </div>
  );
};

export default NotificationsPanel;