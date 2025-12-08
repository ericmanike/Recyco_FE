"use client";

import Link from "next/link";
import { useState } from "react";
import {motion} from "framer-motion";

const Marquee = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null; // hide when closed

  return (
    <div className=" hidden md:block relative bg-gray-800 text-white    p-2 overflow-hidden border-b border-yellow-400 ">
      {/* Close button */}
      <motion.button
      whileHover={{ scale: 1.5, color:'red'}}
      whileTap={{scale:1}}

        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2  text-white  p-1  cursor-pointer  rounded-[100%]   z-50"
        aria-label="Close "
      >
        x
      </motion.button>

      {/* Marquee text */}
      <Link href="/gifts" >
      <div className="whitespace-nowrap animate-marquee m-auto text-center w-full cursor-pointer">
     
        Welcome Bonus 🎁 Sign up and  claim  now
        
      </div>
    </Link>
        <style jsx>{`
       

        `}</style>
    </div>
  );
};

export default Marquee;
