const CardSection = () => {
  return (
    <div className="padding-x w-full">
      <div className="w-full rounded-2xl bg-white relative px-6 sm:px-10 md:px-20 py-5 border border-slate-300 -top-10" data-aos="fade-up"
      data-aos-duration="1500">
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between gap-5 sm:gap-8">
        <div className="text-center">
          <h1 className="font-semibold text-4xl sm:text-5xl">10K</h1>
          <p className="text-sm ">Handphone sudah diperbaiki</p>
        </div>
        <div className="text-center">
          <h1 className="font-semibold text-4xl sm:text-5xl">99%</h1>
          <p className="text-sm">Tingkat kepuasan pelanggan</p>
        </div>
        <div className="text-center">
          <h1 className="font-semibold text-4xl sm:text-5xl">5K+</h1>
          <p className="text-sm ">Pelanggan setia</p>
        </div>
        <div className="text-center">
          <h1 className="font-semibold text-4xl sm:text-5xl">50+</h1>
          <p className="text-sm ">Komponen handphone</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CardSection;
