import Image from "next/image"
import gifInterEstelar from "@/assets/gifs/gifInterEstelarGrande.gif"


export default function Home() {
  return (
    <main className="w-dvw h-dvh bg-backgroundPage">
      <section className=" bg-opacity-50 text-textPrimaryLight relative">
      <Image
      src={gifInterEstelar}
      alt="Gif Oxe-Dev"
      width={2000}
      height={3000}
      className="w-dvw h-full absolute"
        />
    <div className="container mx-auto h-screen flex items-center justify-center relative z-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4"></h1>
        <p className="text-lg mb-6"></p>
       {/*  <a href="#" className="bg-headerColor text-white px-6 py-3 rounded-full hover:bg-opacity-80 transition">Ação Principal</a> */}
      </div>
    </div>
  </section>
      
    </main>
  )
}
