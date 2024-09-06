import Link from "next/link";

const ContactSection = () => {
  return (
    <div className="padding-x pb-8">
      <div className="w-full max-w-6xl mx-auto rounded-lg bg-blue-400 relative px-6 sm:px-10 md:px-20 py-5 ">
        <div className="section-wrapper justify-between gap-6 text-white">
          <div className="width-responsif text-xl font-semibold">Punya pertanyaan terkait layanan kami? Jangan ragu untuk melakukan konsultasi!</div>
          <button className="bg-blue-700 py-2 px-3 rounded-xl shadow-sm"><Link href={"https://wa.me/62895380084949"}>Konsultasi Sekarang</Link> </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
