import Button from "../elements/Button";

const Navbar = () => {
  return(
    <nav className="fixed top-0 left-0 right-0 py-5 px-6 sm:px-20 bg-transparent text-slate-700 flex justify-between items-center z-[9999]">   
      <div className="text-md font-bold w-[10%]">Klinik Smartphone</div>
      <div className="gap-7 list-none hidden sm:flex">
        <li>Beranda</li>
        <li>Layanan</li>
        <li>Blog</li>
      </div>
      <div>
        <Button>Hubungi Kami</Button>
      </div>
    </nav>
  )
}

export default Navbar;