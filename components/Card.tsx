import Link from 'next/link'
import React from 'react'

export default function Card({discription,image,profile}:{discription:string, image:string, profile:object }) {
  return (
    <div className='  w-[350px] h-fit p-5  bg-white rounded-[5px] hover:shadow-lg'>
    <div className='min-h-[170px] md:min-h-[250px] border-2 w-full  text-white  overflow-hidden'>

     <img src={'/Wastocash1.png'}  alt='Picture' className='w-[101%] h-[101%] hover:scale-[1.02]  transition-all duration-300 ease-in '/>

    </div>


   <div className='w-full   my-3 leading-relaxed line-clamp-1'> 
    {discription}
   </div>




   <div className='flex justify-between '>
    <div className=' w-13 h-13 rounded-4xl border-2 p-3 cursor-pointer'>

   <img src={'/Wastocash.png'}    alt='logo' className='object-fill  w-full h-full'/>
    </div>


   <button className=' bg-green-500 px-2 rounded-[10px] cursor-pointer text-white'> Chat order</button>

   </div> 



    </div>
  )
}
