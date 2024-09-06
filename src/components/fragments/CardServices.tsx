import Link from "next/link"
import Button from "../elements/Button"
import Card from "../elements/Card"
import { FaHome } from "react-icons/fa";

type CardItem = {
  name: string
  description: string
  image: string
}
const CardServices = () => {
  return (
    <div className="w-full py-10 flex justify-center flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-3 padding-x gap-3 pt-20">
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
        <Button>
          <Link href="/" className="flex justify-center items-center "><FaHome className="mr-2"/> Kembali</Link> 
        </Button>
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
  {
    name: "Penggantian Baterai Tanam",
    description: "Layanan penggantian baterai tanam untuk handphone Anda. Kami mengganti baterai dengan cepat dan aman agar perangkat Anda berfungsi optimal kembali.",
    image: "l4"
  },
  {
    name: "Perbaikan HP Bekas Air",
    description: "Jika handphone Anda terkena air, kami siap menangani kerusakan akibat cairan dengan prosedur perbaikan yang hati-hati",
    image: "l5"
  },
  {
    name: "Pemulihan Password HP",
    description: "Lupa password handphone? Kami menyediakan layanan pemulihan password dengan metode yang aman dan efisien untuk mengakses kembali perangkat Anda.",
    image: "l6"
  },
]

export default CardServices