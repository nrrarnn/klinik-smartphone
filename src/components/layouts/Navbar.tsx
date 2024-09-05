import Link from "next/link";
import Button from "../elements/Button";

const Navbar = () => {
  return(
    <nav className="fixed top-0 left-0 right-0 py-5 px-6 sm:px-20 bg-transparent text-slate-700 flex justify-between items-center z-[9999] backdrop-blur-lg">   
      <div className="text-md font-bold w-[10%]">Klinik Smartphone</div>
      <ul className="gap-7 list-none hidden sm:flex">
        <li>
          <Link href="/">
            Beranda
          </Link>
        </li>
        <li>
          <Link href="/layanan">
            Layanan
          </Link>
        </li>
        <li>
          <Link href="/blog">
            Blog
          </Link>
        </li>
      </ul>
      <div>
        <Button>Hubungi Kami</Button>
      </div>
    </nav>
  )
}

export default Navbar;