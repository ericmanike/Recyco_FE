'use client';
import { Menu, ShoppingBag, ShoppingCart, Gift, Truck, Bell,PhoneCall,Megaphone } from 'lucide-react';
import logo from '../public/Wastocash0.png';
import Link from 'next/link';
import {  useState } from 'react';
import NotificationsPanel from './Notifications';
import MoreDropdown from './Dropdown';
import Sidebar from './Sidebar';
import ActiveLink from './ActiveLink';
import DropdownProfile from './Profiledropdown';
import { AuthContext } from './Auth_Context';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import {motion, scale} from 'framer-motion';
import Marquee from './marquee';


const Navbar = () => {
const [isSidebarOpen, setIsSidebarOpen] = useState(false);
const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);


const  {isLogin} = useContext(AuthContext)!;
const router = useRouter();







  return (
    <>
  
    <nav className="w-full bg-white shadow-lg overflow-hidden fixed  top-0 left-0 z-50 ">
      <Marquee />
      <div className="flex items-center justify-between px-4 py-2 ">
        {/* Left Section - Menu, Logo and Navigation */}
        <div className="flex gap-2  md:gap-6 ">
          {/* Menu Button */}
          <button className="p-2 hover:text-gray-100 rounded-lg transition cursor-pointer" onClick={()=>setIsSidebarOpen(true)}>
          <Menu size={34} className="text-black" strokeWidth={2} />
          </button>

          {/* Logo */}
          <div className="flex  items-center  md:mr-15 ">
            <div className=" rounded-full border-2 border-green-600 border-double flex items-center justify-center ">
            <Link href="/">
              <img src={logo.src} alt="WastoCash Logo" className="w-9 h-9 md:w-12 md:h-12 cursor-pointer" />
            </Link>
            </div>
            <span className="hidden md:block text-green-700 font-semibold font-[bitcount] text-[20px] md:text-4xl">
              RECYCO
            </span>
          </div>

          {/* Navigation Items */}
          <div className=" bg-white rounded-2xl px-3  py-5
           gap-6  flex   fixed  md:relative left-0 right-0  bottom-3  md:bottom-0  
            md:gap-8 justify-center ">
            {/* Buy */}
            <ActiveLink href="/buy">
              <button className="flex flex-col items-center gap-1 hover:opacity-80 transition">
                <ShoppingBag size={28} className=" h-5 md:h-8  hover:text-green-500 cursor-pointer" strokeWidth={2} />
                <span className="  text-sm font-medium">Buy</span>
              </button>
            </ActiveLink>

            {/* Sell */}
            <ActiveLink href="/sell">
              <button className="flex flex-col items-center gap-1 hover:opacity-80 transition">
                <ShoppingCart size={28} className=" h-5 md:h-8  hover:text-green-500 cursor-pointer " strokeWidth={2} />
                <span className="text-sm font-medium">Sell</span>
              </button>
            </ActiveLink>



            {/* Sell */}
            <ActiveLink href="/orderPickup">
              <button className="flex flex-col items-center gap-1 hover:opacity-80 transition">
                <Truck size={28} className=" h-5 md:h-8  hover:text-green-500 cursor-pointer " strokeWidth={2} />
                <span className="text-sm font-medium">Order pickup</span>
              </button>
            </ActiveLink>

            {/* Gifts */}
            <ActiveLink href="/gifts">
            <button className="flex flex-col items-center gap-1 hover:opacity-80 transition relative">
              <Gift size={28} className="h-5 md:h-8  hover:text-green-500 cursor-pointer" strokeWidth={2} />
              <span className=" text-sm font-medium">Gifts</span>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#f39e0c]
               text-white text-xs font-bold
                rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            </ActiveLink>

            
            {/* More */}
            <div className=" hidden md:flex flex-col items-center gap-1 hover:opacity-80 transition" onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}>
              <MoreDropdown />
              <span className="text-black text-sm font-semibold">More</span>
              
            </div>
          

            <ActiveLink href="/news">
              <button className=" md:hidden flex flex-col items-center gap-1 hover:opacity-80 transition">
              <Megaphone size={28} className="h-5 md:h-9  hover:text-green-500 cursor-pointer" strokeWidth={2.5} />
              <span className=" text-sm font-semibold">News</span>
            </button>
            </ActiveLink>

            

          </div>
        </div>

        {/* Right Section - User Profile and Notifications */}
        <div className="flex items-center gap-4 ">
          {/* Vertical Divider */}
          <div className=" md:h-12 w-0.5 bg-gray-300"></div>

          {/* User Avatar */}
         {  !isLogin ?( < motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{scale: 0.9}}
          transition={{ duration: 0.1 }}

          
          className="py-2 px-3 cursor-pointer hover:opacity-80 
          transition rounded-lg bg-green-500 text-white text-[14px] md:text-[18px]"
          onClick={()=> router.push('/Login')}
          >
            Get started
          </motion.button>
         ) : (
          <>
           <DropdownProfile />

   
         
          <button className="relative hover:opacity-80 transition p-2
           hover:bg-gray-100 rounded-lg" onClick={()=>setIsNotificationsOpen(true)}>
            <Bell size={28} className="text-black hover:text-green-500  cursor-pointer " strokeWidth={2} />
            {/*notification badge */}
            { <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>}
          </button>
          </>
       )}
        </div>
      </div>

    </nav>
    <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    <NotificationsPanel isOpen={isNotificationsOpen} setIsOpen={setIsNotificationsOpen} />
    </>
  );
};

export default Navbar;