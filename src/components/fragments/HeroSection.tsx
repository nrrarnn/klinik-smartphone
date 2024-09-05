import Image from "next/image"
import Button from "../elements/Button"

const HeroSection = () => {
  return (
    <div className="section-wrapper padding-x pt-20 pb-10 bg-slate-200 ">   
      <div className="w-full sm:w-[50%] items-center">
        <h1 className="text-5xl flex ">Solusi Cepat dan Terjangkau untuk Semua Masalah Handphone</h1>
        <p className="text-slate-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dignissimos odio nostrum nisi sit. Ipsam pariatur tempora nostrum vitae voluptas.</p>
        <div className="pt-5">
          <Button>Lihat Layanan</Button>
        </div>
      </div>
      <div className="w-full sm:w-[50%] flex justify-center items-center">
        <div className="w-[500px] h-[500px] relative bg-blue-300/20 rounded-full backdrop-blur-lg">
          <Image src="/img/hero-section.png" alt="hero image" width={500} height={500} />
          <div className="w-52 bg-white/30 rounded-2xl top-[100px] right-[20px] absolute h-32 shadow-lg backdrop-blur-sm flex justify-center">
            <h1>Hello</h1>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default HeroSection