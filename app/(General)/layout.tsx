import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NavbarWrapper from '@/components/NavSuspense'




export default function layout( {children}: {children: React.ReactNode}) {
  return (
    <>
    
      <NavbarWrapper />
      {children}
      <Footer />
    </>
  )
}
