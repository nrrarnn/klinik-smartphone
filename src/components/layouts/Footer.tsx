import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* About Us */}
          <div className="w-full md:w-1/4 mb-6 pr-2">
            <h2 className="text-xl font-semibold mb-2">Tentang Kami</h2>
            <p>Klinik Smartphone adalah solusi cepat dan terpercaya untuk perbaikan dan perawatan berbagai jenis ponsel.</p>
          </div>
          {/* Services */}
          <div className="w-full md:w-1/4 mb-6">
            <h2 className="text-xl font-semibold mb-2">Layanan Kami</h2>
            <ul>
              <li><Link href="/services#hardware-repair">Perbaikan Hardware</Link></li>
              <li><Link href="/services#software-repair">Perbaikan Software</Link></li>
              <li><Link href="/services#screen-battery">Ganti Layar & Baterai</Link></li>
              <li><Link href="/services#update-upgrade">Update & Upgrade Sistem</Link></li>
              <li><Link href="/services#backup-recovery">Backup & Recovery Data</Link></li>
            </ul>
          </div>
          {/* Contact Us */}
          <div className="w-full md:w-1/4 mb-6">
            <h2 className="text-xl font-semibold mb-2">Hubungi Kami</h2>
            <p>Jl. Teknologi No. 12, Bandung</p>
            <p>Tel: (022) 123-4567</p>
            <p>Email: <a href="mailto:info@kliniksmartphone.com" className="text-blue-300">info@kliniksmartphone.com</a></p>
          </div>
          {/* Follow Us */}
          <div className="w-full md:w-1/4 mb-6">
            <h2 className="text-xl font-semibold mb-2">Ikuti Kami</h2>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook"><img src="/icons/facebook.png" alt="Facebook" className="w-6 h-6" /></a>
              <a href="#" aria-label="Instagram"><img src="/icons/instagram.png" alt="Instagram" className="w-6 h-6" /></a>
              <a href="#" aria-label="WhatsApp"><img src="/icons/whatsapp.png" alt="WhatsApp" className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center mt-10'>Copyright © 2023 Klinik Smartphone</div>
    </footer>
  );
}

export default Footer;
