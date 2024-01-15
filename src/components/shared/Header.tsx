"use client"
import Image from "next/image"
import logo from "@/assets/logos/logo.png"
import Link from "next/link"


export function Header(){
  return(
    <header className="h-16 px-6 border border-opacity-50 border-b-inputBorder w-dvw flex items-center justify-between ">
      <span>
        <Link href={'/'} className="cursor-pointer">
        <Image
        src={logo}
        width={135}
        height={64}
        alt="Logo Oxe Dev"
         />
        </Link>
      </span>
      <nav>
      </nav>
      </header>
  )
}