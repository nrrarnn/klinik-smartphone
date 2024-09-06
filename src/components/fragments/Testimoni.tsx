import TestimonialCard from "./TestimonialCard";

type Testimonial = {
  quote: string;
  author: string;
  photo?: string; // Foto opsional
};

const Testimoni = () => {
  return(
    <>
      <div className="padding-x section-wrapper bg-slate-100 py-20">
        <div className="width-responsif">
          <h6 className="text-slate-700 font-bold">Testimoni</h6>
          <h1 className="text-5xl font-bold text-slate-800">Apa Kata Pelanggan</h1>
          <p className="pt-3 text-slate-700 text-[14px] w-[80%]">Kami selalu berusaha memberikan yang terbaik untuk setiap pelanggan. Testimoni ini adalah bukti nyata bahwa layanan kami mampu memenuhi harapan mereka.</p>
        </div>
        <div className="width-responsif">
          <div className="section-wrapper gap-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                photo={testimonial.photo}
              />
        ))}
          </div>
        </div>
      </div>
    </>
  )
}

const testimonials: Testimonial[] = [
  {
    quote: "Layanan mereka sangat cepat dan efisien. Saya sangat puas dengan hasilnya!",
    author: "Arin Kannazuki",
    photo: "https://images.unsplash.com/photo-1550703703-c6f229024ba9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "Pengalaman yang sangat menyenangkan. Staf sangat ramah dan membantu.",
    author: "Sarah Nahdi",
    photo: "https://images.unsplash.com/photo-1532549453886-602b1eeda04e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default Testimoni