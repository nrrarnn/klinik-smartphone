import Image from "next/image"

const AboutSection = () => {
  return (
    <>
      <div className="section-wrapper padding-x  gap-6 py-10">
        <div className="width-responsif flex justify-center">
          <div className="w-[400px] relative rounded-tr-full rounded-b-full bg-blue-300/50 ">
            <Image src="/img/about.png" alt="about image" className="shadhow-lg" width={400} height={400}/>
          </div>
        </div>
        <div className="width-responsif flex flex-col gap-2">
          <h6 className="font-bold text-lg text-slate-700">Tentang kami</h6>
          <h1 className="text-blue-400 font-bold text-3xl">Klinik Smartphone</h1>
          <p className="leading-1 text-[17px]">
            Klinik Smartphone adalah pusat layanan khusus yang menawarkan solusi lengkap untuk semua jenis masalah perangkat mobile. Kami fokus pada memberikan layanan perbaikan berkualitas tinggi dengan pendekatan yang cepat dan efisien. Dengan teknisi berpengalaman dan peralatan modern, kami memastikan setiap perangkat diperbaiki dengan standar tertinggi.
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutSection