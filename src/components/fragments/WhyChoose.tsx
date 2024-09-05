import Image from "next/image"
type PointOfInterest = {
  title: string
  description: string
  icon: string
}

const WhyChoose = () => {
  return (
    <div className="section-wrapper padding-x gap-6 py-10">
      <div className="w-full sm:w-[50%] flex justify-center">
        <div className="flex flex-col gap-3">
          <h1 className=" font-bold text-slate-700 text-2xl">Kenapa memilih kami?</h1>
          {
            pointOfInterest.map((point, index) => {
              return (
                <div key={index} className="flex flex-row items-center gap-2">
                  <p className="p-4 text-xl font-bold rounded-full bg-blue-300">
                    <img src={`${point.icon}`} alt="why choose icon" width={40} height={40}/>
                  </p>
                  <div>
                    <p className="text-slate-700">{point.title}</p>
                    <p>{point.description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="w-full sm:w-[50%] flex justify-center">
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
    icon: "https://cdn-icons-png.flaticon.com/512/1214/1214428.png",
  },
  {
    title: "Layanan Cepat dan Berkualitas",
    description: "Kami menawarkan perbaikan smartphone dengan waktu layanan yang cepat tanpa mengorbankan kualitas.",
    icon: "https://cdn-icons-png.flaticon.com/512/1214/1214428.png",
  },
  {
    title: "Layanan Cepat dan Berkualitas",
    description: "Kami menawarkan perbaikan smartphone dengan waktu layanan yang cepat tanpa mengorbankan kualitas.",
    icon: "https://cdn-icons-png.flaticon.com/512/1214/1214428.png",
  }
]

export default WhyChoose
