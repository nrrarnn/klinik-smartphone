import Button from "@/components/elements/Button"
import Link from "next/link"
import { FaHome } from "react-icons/fa"

type CardBlogType = {
  id: number
  title: string
  image: string
  description: string
}
const CardBlog = () => {
  return(
    <>
      <div className="padding-x w-full grid grid-cols-1 sm:grid-cols-3 gap-3 py-20 mx-auto">
        {
          blogPosts.map((item) => {
            return (
              <div className="blog-card" key={item.id} data-aos="fade-up"
      data-aos-duration="1500">
                <div className="w-full h-64 bg-slate-300 rounded-t-md mb-3">
                  <img src={`/img/${item.image}.jpg`} className="w-full h-full object-cover rounded-md" />
                </div>
                <div className="p-4">
                  <h1 className="text-2xl font-bold text-slate-800">{item.title}</h1>
                  <p>{item.description}</p>
                  <Link href={`/blog/${item.id}`} className="">
                    <button className="text-blue-500 hover:underline">Lihat Selengkapnya</button>
                  </Link>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="py-10 flex justify-center">
        <Button>
          <Link href="/" className="flex justify-center items-center "><FaHome className="mr-2"/> Kembali</Link> 
        </Button>
      </div>
    </>
  )
}

const blogPosts: CardBlogType[] = [
  {
    id: 1,
    title: "Kenapa Memperbaiki Smartphone Lebih Hemat daripada Membeli Baru?",
    image: "blog1",
    description: `Ketika smartphone rusak, banyak orang langsung berpikir untuk membeli yang baru. Namun, memperbaiki ponsel yang rusak sering kali merupakan pilihan yang lebih hemat dan bijaksana.`
  },
  {
    id: 2,
    title: "Masalah Smartphone yang Sering Terjadi dan Solusinya",
    image: "blog2",
    description: "Smartphone sering kali mengalami berbagai masalah, terutama setelah digunakan dalam jangka waktu lama. Pada artikel ini, kami akan membahas beberapa masalah umum yang sering dialami pengguna dan memberikan solusi yang bisa Anda coba sendiri sebelum datang ke klinik."
  },
  {
    id: 3,
    title: "Cara Menjaga Smartphone Anda Agar Tetap Awet",
    image: "blog3",
    description: " Smartphone adalah bagian penting dari kehidupan kita sehari-hari. Namun, banyak orang tidak menyadari bahwa ada beberapa langkah sederhana yang bisa membuat ponsel mereka bertahan lebih lama. Pada artikel ini, kami akan berbagi tips praktis yang bisa Anda lakukan untuk merawat ponsel Anda."
  },
]

export default CardBlog