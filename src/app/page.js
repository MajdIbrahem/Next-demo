import Image from "next/image";

export default function Home() {
  return (<div className=" flex items-center justify-center gap-16 py-8 px-12 flex-col md:flex-row">
    <div className="flex justify-center items-center flex-col gap-8">
      <h1 className="text-6xl font-bold text-white">Creative Thoughts Agency</h1>
      <p className="text-lg font-semibold text-white text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
        blanditiis adipisci minima reiciendis a autem assumenda dolore.</p>
      <div className="flex items-center justify-center gap-4 py-2">
        <button className="bg-blue-600 text-white py-1 px-2 rounded">Learn More</button>
        <button className="bg-white text-black py-1 px-2 rounded">Contact</button>
      </div>
      <Image src='/brands.png' width={500} height={200}></Image>
    </div>
    <div>
      <Image src='/hero.gif' width={600} height={600}></Image>
    </div>
  </div>)
}
    