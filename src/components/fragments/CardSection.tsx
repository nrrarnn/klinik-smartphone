const CardSection = () => {
  return (
    <>
      <div className="w-full max-w-6xl mx-auto rounded-2xl bg-white relative -top-16 px-6 sm:px-10 md:px-20 py-5 border border-slate-300">
        <div className="flex justify-between">
          <div>
            <h1 className="font-semibold text-5xl">10K</h1>
            <p className="w-[60%] text-sm">Handphone sudah diperbaiki</p>
          </div>
          <div>
            <h1 className="font-semibold text-5xl">99%</h1>
            <p className="w-[70%] text-sm">Tingkat kepuasan pelanggan</p>
          </div>
          <div>
            <h1 className="font-semibold text-5xl">5K+</h1>
            <p className="w-[60%] text-sm">Pelanggan setia</p>
          </div>
          <div>
            <h1 className="font-semibold text-5xl">50+</h1>
            <p className="w-[60%] text-sm">Komponen handphone</p>
          </div>
          
        </div>
      </div>

    </>
  )              
}

export default CardSection