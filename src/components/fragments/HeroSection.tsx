import Image from "next/image"
import Button from "../elements/Button"
import Link from "next/link"

const HeroSection = () => {
  return (
    <div className="section-wrapper padding-x pt-32 md:pt-20 pb-10 bg-blue-50/80 m-0">   
      <div className="width-responsif items-center">
        <h1 className="text-5xl sm:text-6xl flex font-extrabold text-slate-900">Solusi Cepat dan Terjangkau untuk Semua Masalah Handphone</h1>
        <p className="text-slate-600 pt-3"> Kami hadir untuk memberikan solusi terbaik dan tercepat untuk berbagai masalah handphone Anda. Dengan layanan profesional dan harga terjangkau, kami siap membantu memastikan perangkat Anda kembali berfungsi optimal.</p>
        <div className="pt-5">
          <Button>
            <Link href="/layanan">
              Lihat Layanan
            </Link>
          </Button>
        </div>
      </div>
      <div className="width-responsif flex justify-center items-center pt-10 md:pt-2">
        <div className="w-[500px] relative bg-blue-300/50 rounded-full">
          <Image src="/img/hero-section.png" alt="hero image" width={500} height={500} />
          <div className="w-40 sm:w-52 bg-white/60 rounded-2xl top-[80px] sm:top-[100px] right-[20px] absolute h-24 sm:h-32 shadow-lg backdrop-blur-sm flex flex-col justify-center items-center">
            <h2 className="text-md sm:text-lg font-bold text-slate-900">Garansi 100%</h2>
            <p className="text-xs sm:text-sm text-slate-700">Layanan Terbaik</p>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default HeroSection