'use client'
import WasteManagementHero from '@/components/hero';
import  {FirstVisitPopup}  from '@/components/FirstVisitAlert';
export default function Home(){
  return (

    <div className='w-full   scroll-behavior-smooth '>

      <WasteManagementHero />
      <FirstVisitPopup /> 
 


    </div>
  );
}
