'use client'
import Login from "@/components/Login";
import Card from "@/components/Card";
import WasteListingForm from "@/components/listingform";
import { useState } from "react";

export default function SellPage(  ) {
const[createListing,setCreateListing]=useState(false);







  return (
    <div className="min-h-screen font-sans 
     w-full   bg-blue-100 mt-25 flex flex-wrap justify-center  gap-2 ">
     
     <div className="my-20">

<div className="w-full flex justify-center p-9 font-bold">
     <button className={`${createListing ? ' border border-black bg-transparent text-black' : 'bg-green-500  text-white '} 
     rounded-lg  p-3 font-bold cursor-pointer text-[12px]  md:text-[20px]`} onClick={()=>setCreateListing(false)}>
       Your Listings
     </button>
    

   <button className={`${createListing ? 'bg-green-500  text-white ' : ' border border-black bg-transparent text-black'} 
   rounded-lg ml-5  p-3 font-bold cursor-pointer text-[12px]  md:text-[20px]`} onClick={()=>setCreateListing(true)}>
    Create New Listing</button>  
</div>
     
    { !createListing && (
      <div className=" flex flex-wrap justify-center gap-4 ">
      <Card  discription='Plastic waste 1kg 200bags worth of 30 cedis 843985939728q7o9' image="/Wastocash.png" profile={{name:'Eric recycling',logo:'/Wastocash1.png'}} />
      <Card  discription='Plastic waste 1kg 200bags worth of 30 cedis 843985939728q7o9' image="/Wastocash.png" profile={{name:'Eric recycling',logo:'/Wastocash1.png'}} />
      <Card  discription='Plastic waste 1kg 200bags worth of 30 cedis 843985939728q7o9' image="/Wastocash.png" profile={{name:'Eric recycling',logo:'/Wastocash1.png'}} />
      <Card  discription='Plastic waste 1kg 200bags worth of 30 cedis 843985939728q7o9' image="/Wastocash.png" profile={{name:'Eric recycling',logo:'/Wastocash1.png'}} />
      <Card  discription='Plastic waste 1kg 200bags worth of 30 cedis 843985939728q7o9' image="/Wastocash.png" profile={{name:'Eric recycling',logo:'/Wastocash1.png'}} />
      <Card  discription='Plastic waste 1kg 200bags worth of 30 cedis 843985939728q7o9' image="/Wastocash.png" profile={{name:'Eric recycling',logo:'/Wastocash1.png'}} />
     </div>)
     }


     {createListing && <WasteListingForm />}
      </div>
    
     

      
      
     
  
   
    </div>
  );
}
