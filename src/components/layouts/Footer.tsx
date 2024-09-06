import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* About Us */}
          <div className="w-full md:w-1/4 mb-6 pr-2">
            <h2 className="text-xl font-semibold mb-2">Tentang Kami</h2>
            <p className='text-slate-100'>Klinik Smartphone adalah solusi cepat dan terpercaya untuk perbaikan dan perawatan berbagai jenis ponsel.</p>
          </div>
          {/* Services */}
          <div className="w-full md:w-1/4 mb-6">
            <h2 className="text-xl font-semibold mb-2">Layanan Kami</h2>
            <ul className="font-medium text-slate-300">
              <li className='hover:text-white'>Melayani Semua Jenis HP</li>
              <li className='hover:text-white'>Penggantian LCD</li>
              <li className='hover:text-white'>Handphone Mati Total</li>
              <li className='hover:text-white'>Baterai Tanam</li>
              <li className='hover:text-white'>Lupa Password</li>
              <li className='hover:text-white'>HP Bekas Air</li>
            </ul>

          </div>
          {/* Contact Us */}
          <div className="w-full md:w-1/4 mb-6">
            <h2 className="text-xl font-semibold mb-2">Hubungi Kami</h2>
            <p className="text-slate-100">Jl. Salamanjah RT 02/ RW 06 Desa. Cipaku Kec. Paseh, Kab. Bandung Jawa Barat</p>
            <p className="text-slate-100">Tel: (022) 123-4567</p>
            <p className="text-slate-100">Email: <a href="mailto:info@kliniksmartphone.com" className="text-blue-300">info@kliniksmartphone.com</a></p>
          </div>
          {/* Follow Us */}
          <div className="w-full md:w-1/4 mb-6">
            <h2 className="text-xl font-semibold mb-2">Ikuti Kami</h2>
            <div className="flex space-x-4 text-slate-100">
              <Link href="https://www.tiktok.com/@iinifebri_" aria-label="Tiktok"><FaTiktok className="w-6 h-6" /></Link>
              <Link href="https://www.instagram.com/majalaya.klinik_smartphone" aria-label="Instagram"><FaInstagram className="w-6 h-6" /></Link>
              <Link href="https://wa.me/62895380084949" aria-label="WhatsApp"><FaWhatsapp className="w-6 h-6" /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center mt-10'>Copyright © 2024 Klinik Smartphone</div>
    </footer>
  );
}

export default Footer;
