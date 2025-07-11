import Link from "next/link"
import Button from "../elements/Button"
import Card from "../elements/Card"

type CardItem = {
  name: string
  description: string
  image: string
}
const ServicesSection = () => {
  return (
    <div className="w-full py-10">
      <h1 className="text-3xl font-bold text-slate-800 text-center">Layanan Kami</h1>
      <div className="section-wrapper padding gap-5 pt-20">
          {
            cardItems.map((item, index) => {
              return (
                <Card
                  key={index}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                />
              )
            })
          }
      </div>
      <div className="pt-10 flex justify-center">
        <button className="button-style">
          <Link href="/layanan">Lihat Selengkapnya</Link> 
        </button>
      </div>
    </div>
  )
}

const cardItems: CardItem[] = [
  {
    name: "Perbaikan semua tipe HP",
    description: "Kami menawarkan layanan perbaikan untuk semua jenis handphone, dari merek populer hingga yang kurang dikenal. Solusi cepat dan handal untuk masalah HP Anda.",
    image: "l1"
  },
  {
    name: "Penggantian LCD",
    description: "Gantilah layar LCD Anda yang rusak atau pecah dengan layanan penggantian layar berkualitas tinggi. Dapatkan tampilan baru yang jernih dan tajam",
    image: "l2"
  },
  {
    name: "Handphone Mati Total",
    description: "Handphone Anda mati total? Kami akan mendiagnosis dan memperbaiki masalah sehingga handphone Anda kembali menyala dan berfungsi normal.",
    image: "l3"
  },
]

export default ServicesSection