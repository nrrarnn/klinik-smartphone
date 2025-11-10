import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Footer = () => {
  const footerRef = useRef(null);
  const socialIconsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

    socialIconsRef.current.forEach((icon, index) => {
      if (icon) {
        icon.addEventListener("mouseenter", () => {
          gsap.to(icon, {
            scale: 1.2,
            rotate: 5,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        icon.addEventListener("mouseleave", () => {
          gsap.to(icon, {
            scale: 1,
            rotate: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }
    });
  }, []);

  const services = ["Melayani Semua Jenis HP", "Penggantian LCD", "Handphone Mati Total", "Baterai Tanam", "Lupa Password", "HP Bekas Air"];

  const socialLinks = [
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@iinifebri_",
      icon: FaTiktok,
      color: "hover:text-pink-400 hover:bg-pink-400/10",
      bgGradient: "from-pink-500 to-red-500",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/majalaya.klinik_smartphone",
      icon: FaInstagram,
      color: "hover:text-pink-500 hover:bg-pink-500/10",
      bgGradient: "from-purple-500 to-pink-500",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/62895400903748",
      icon: FaWhatsapp,
      color: "hover:text-green-400 hover:bg-green-400/10",
      bgGradient: "from-green-500 to-green-600",
    },
  ];

  return (
    <footer ref={footerRef} className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-600/10 to-cyan-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Klinik Smartphone</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">Solusi cepat dan terpercaya untuk perbaikan dan perawatan berbagai jenis ponsel dengan teknologi terdepan.</p>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Melayani sejak 2020</span>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Layanan Kami</h2>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="group flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:bg-blue-400 transition-colors duration-300"></div>
                  <span className="font-medium">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Hubungi Kami</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-slate-300 leading-relaxed">Jl. Salamanjah RT 02/ RW 06 Desa. Cipaku Kec. Paseh, Kab. Bandung Jawa Barat</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <a href="tel:+6222123456" className="text-slate-300 hover:text-green-400 transition-colors duration-300">
                  (022) 123-4567
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:info@kliniksmartphone.com" className="text-slate-300 hover:text-purple-400 transition-colors duration-300">
                  info@kliniksmartphone.com
                </a>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Ikuti Kami</h2>
            <div className="space-y-4">
              <p className="text-slate-300 text-sm">Dapatkan update terbaru dan tips perawatan handphone</p>

              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Link
                      key={index}
                      href={social.href}
                      aria-label={social.name}
                      ref={(el) => {
                        socialIconsRef.current[index] = el;
                      }}
                      className={`group relative w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700 ${social.color} transition-all duration-300 hover:border-transparent hover:shadow-lg hover:shadow-current/20`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.bgGradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                      <IconComponent className="w-5 h-5 relative z-10" />
                    </Link>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-slate-700">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Aktif merespon dalam 5 menit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="relative z-10 border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <span>© 2024 Klinik Smartphone</span>
              <span className="hidden md:block">•</span>
              <span className="text-slate-500">Semua hak dilindungi</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-400">
              <Link href="/privacy" className="hover:text-white transition-colors duration-300">
                Kebijakan Privasi
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-300">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
