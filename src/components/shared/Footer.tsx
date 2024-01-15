"use client"
import Image from "next/image"
import logo from "@/assets/logos/logo.png"
import Link from "next/link"


export function Footer(){

  return(
    <footer className="h-[435px] px-14 w-dvw border border-t-inputBorder grid grid-cols-3 py-9 border-opacity-50">
      <div className="flex flex-col  justify-between items-center">
      <div>
        <Link href={'/'} className="cursor-pointer">
        <Image
        src={logo}
        width={200}
        height={64}
        alt="Logo Oxe Dev"
         />
        </Link></div>
      <div><p>&copy; 2024 OxeDev.</p> </div>
      </div>

    </footer>
  )
}