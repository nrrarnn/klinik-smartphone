import { useState } from "react";
import Link from "next/link";
import Button from "../elements/Button";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 py-5 px-6 sm:px-20 bg-transparent text-slate-800 flex justify-between items-center z-[9999] backdrop-blur-xl">
      <div className="text-md font-bold">
        <span className="block">Klinik</span>
        <span className="block">Smartphone</span>
      </div>

      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none transition-transform duration-300">
          {isMenuOpen ? <CgClose className="w-[35px] h-[35px]"  /> : <CgMenuRightAlt className="w-[35px] h-[35px]" />}
        </button>
      </div>

      <ul className="hidden sm:flex items-center justify-center flex-1 gap-7">
        <li className="relative group">
          <Link href="/" className="inline-block">
            Beranda
          </Link>
          <span className="block absolute bottom-0 left-0 w-0 h-[3px] bg-slate-800 rounded-full transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <Link href="/layanan" className="inline-block">
            Layanan
          </Link>
          <span className="block absolute bottom-0 left-0 w-0 h-[3px] bg-slate-800 rounded-full transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <Link href="/blog" className="inline-block">
            Blog
          </Link>
          <span className="block absolute bottom-0 left-0 w-0 h-[3px] bg-slate-800 rounded-full transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>

      <div className="hidden sm:block">
        <Button><Link href={'https://wa.me/62895380084949'}>Hubungi Kami</Link></Button>
      </div>

      <ul
        className={`${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } absolute top-20 left-0 right-0 bg-white text-center py-5 sm:hidden transition-transform duration-300 ease-in-out z-50`}
      >
        <li className="py-2 hover:text-blue-400">
          <Link href="/" onClick={toggleMenu}>
            Beranda
          </Link>
        </li>
        <li className="py-2 hover:text-blue-400">
          <Link href="/layanan" onClick={toggleMenu}>
            Layanan
          </Link>
        </li>
        <li className="py-2 hover:text-blue-400">
          <Link href="/blog" onClick={toggleMenu}>
            Blog
          </Link>
        </li>
        <li className="py-2">
          <Button><Link href={'https://wa.me/62895380084949'}>Hubungi Kami</Link></Button>
        </li>
      </ul>
    </nav>

  );
};

export default Navbar;
