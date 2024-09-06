import Image from "next/image"
import { ElementType } from "react"
import { FaStar, FaTags, FaShieldAlt } from "react-icons/fa";
type PointOfInterest = {
  title: string
  description: string
  icon: ElementType
}

const WhyChoose = () => {
  return (
    <div className="section-wrapper padding-x gap-6 py-10">
      <div className="width-responsif flex justify-center">
        <div className="flex flex-col gap-3">
          <h1 className=" font-bold text-slate-800 text-3xl">Kenapa memilih kami?</h1>
          {
            pointOfInterest.map((point, index) => {
              const Icon = point.icon
              return (
                <div key={index} className="flex flex-row items-center gap-2">
                  <p className="p-4 text-xl font-bold rounded-full bg-blue-300/70">
                    <Icon/>
                  </p>
                  <div>
                    <p className="text-slate-800 font-bold text-[19px]">{point.title}</p>
                    <p className="text-slate-700">{point.description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="width-responsif flex justify-center">
        <div className="w-[400px] relative rounded-tl-full rounded-bl-full bg-blue-300/50">
          <Image src="/img/why-choose.png" alt="why choose image" className="shadhow-lg" width={400} height={400} />
        </div>
      </div>
    </div>
  )
}

const pointOfInterest: PointOfInterest[] = [
  {
    title: "Layanan Cepat dan Berkualitas",
    description: "Kami menawarkan perbaikan smartphone dengan waktu layanan yang cepat tanpa mengorbankan kualitas.",
    icon: FaStar,
  },
  {
    title: "Garansi Kepuasan Pelanggan",
    description: "Kepuasan Anda adalah tujuan utama kami. Kami memberikan garansi atas setiap layanan yang kami berikan.",
    icon: FaTags,
  },
  {
    title: "Harga Terjangkau",
    description: "Kami menawarkan layanan berkualitas dengan harga yang kompetitif tanpa mengurangi kualitas hasil perbaikan.",
    icon: FaShieldAlt,
  }
]

export default WhyChoose
