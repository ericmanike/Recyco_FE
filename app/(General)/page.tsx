'use client'
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import WasteManagementHero from '@/components/hero';
import DriverCarousel from '@/components/sample';
export default function Home(){
  return (

    <div className='w-full   scroll-behavior-smooth bg-[url("/bg.jpg")] bg-no-repeat bg-cover '>

      <WasteManagementHero />

 
<div className='w-full   py-10 '>
  <h3 className='text-center'> Subscribe to our Newsletter</h3>
  <div  className='flex gap-2 mt-4 w-[60%] mx-auto '>
  <Input placeholder="Enter your email" />
  <Button className=' bg-green-500 text-white cursor-pointer'>Subscribe</Button>
  </div>
</div>


    </div>
  );
}
