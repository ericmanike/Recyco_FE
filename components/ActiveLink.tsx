import React, { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';


export default function ActiveLink({ href ,children}: { href: string;  children: React.ReactNode }) {
  const pathname = usePathname();
  useEffect(() => {
    console.log('Current pathname:', pathname , 'Link href:', href);
  }
    , [pathname]);

  return (
     <Link href={href} className={pathname === href ? 'text-blue-500 font-bold' : ''}>
       {children}

     </Link>
  )

}


