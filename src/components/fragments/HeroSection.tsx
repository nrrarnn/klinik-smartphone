import Image from "next/image";
import Button from "../elements/Button";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const cardRef = useRef(null);
  const heroImageRef = useRef(null);

  useEffect(() => {
    const cardTl = gsap.timeline({ repeat: -1, yoyo: true });
    cardTl.to(cardRef.current, {
      y: -15,
      duration: 1.2,
      ease: "power2.inOut",
    });

    const imageTl = gsap.timeline({ repeat: -1, yoyo: true });
    imageTl.to(heroImageRef.current, {
      y: -8,
      duration: 2,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-200/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 section-wrapper padding-x pt-20 md:pt-32 pb-16">
        <div className=" mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8" data-aos="fade-up" data-aos-duration="1000">
            <div className="space-y-6">
              <div className="inline-flex mt-3 items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                Layanan Profesional Terpercaya
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Solusi
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Cepat</span> dan
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Terjangkau</span>
                <br />
                untuk Semua Masalah Handphone
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Kami hadir untuk memberikan solusi terbaik dan tercepat untuk berbagai masalah handphone Anda. Dengan layanan profesional dan harga terjangkau, kami siap membantu memastikan perangkat Anda kembali berfungsi optimal.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group">
                <Link href="/layanan" className="relative z-10 flex items-center justify-center gap-2">
                  Lihat Layanan
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </button>

              <button className="px-6 py-3 text-slate-700 font-medium hover:text-blue-600 transition-colors flex items-center gap-2 group" onClick={() => window.open("https://wa.me/62895380084949", "_blank")}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Hubungi Kami
                <span className="text-xs text-slate-500 group-hover:text-blue-500 transition-colors">(24/7)</span>
              </button>
            </div>
          </div>

          <div className="relative flex justify-center items-center" data-aos="fade-left" data-aos-duration="1200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-2xl scale-110"></div>

              <div
                ref={heroImageRef}
                className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px] bg-gradient-to-br from-blue-100/80 to-indigo-100/60 rounded-full shadow-2xl shadow-blue-200/20 backdrop-blur-sm border border-white/50"
              >
                <Image src="/img/hero-section-1.png" alt="hero image" width={480} height={480} className="w-full h-full object-cover rounded-full" />

                <div
                  ref={cardRef}
                  className="absolute top-8 right-8 sm:top-12 sm:right-12 w-44 sm:w-52 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 p-4 sm:p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">Garansi 100%</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">Layanan Terbaik & Terpercaya</p>
                  <div className="mt-3 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Additional floating elements */}
                <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 w-16 h-16 bg-white/70 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div className="absolute top-16 left-4 sm:top-20 sm:left-8 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full shadow-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
