"use client"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,

  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DropdownProfile() {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
       <button className=" w-9 h-9 md:w-12 md:h-12 bg-green-500 rounded-full 
       flex items-center justify-center
           text-white font-bold text-[14px] md:text-[16px] hover:opacity-90 transition cursor-pointer">
            MH
          </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="  bg-gray-50 text-black cursor-pointer">

        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer w-full hover:bg-green-500" onClick={() => router.push('/profile') }> Profile</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer w-full hover:bg-green-500">Subscription</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-red-500">Logout  <LogOut className="ml-2" /> </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}