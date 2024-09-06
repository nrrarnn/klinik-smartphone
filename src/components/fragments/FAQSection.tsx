import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Berapa lama waktu yang dibutuhkan untuk perbaikan?",
      answer: "Waktu perbaikan bervariasi tergantung pada jenis layanan dan tingkat kerusakan. Biasanya, perbaikan sederhana seperti penggantian layar memerlukan waktu 1-2 jam, sementara perbaikan lebih kompleks bisa memakan waktu hingga 24 jam.",
    },
    {
      question: "Apakah Anda memberikan garansi untuk layanan yang dilakukan?",
      answer: "Ya, kami memberikan garansi untuk semua layanan perbaikan yang dilakukan. Garansi mencakup masalah yang sama yang diperbaiki dan berlaku untuk jangka waktu tertentu setelah perbaikan. Untuk detail lebih lanjut, silakan baca kebijakan garansi kami di sini.",
    },
    {
      question: "Berapa biaya untuk perbaikan smartphone?",
      answer: "Biaya perbaikan bervariasi tergantung pada jenis kerusakan dan model smartphone. Untuk estimasi biaya, Anda bisa menghubungi kami langsung untuk konsultasi",
    },
    {
      question: "Apakah data saya aman selama proses perbaikan?",
      answer: "Kami menjaga keamanan data dan perangkat Anda selama proses perbaikan. Tim kami akan memastikan bahwa data Anda tidak diakses atau diubah tanpa izin Anda.",
    },
  ];

  const toggleFAQ = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto padding-x pt-10 pb-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Pertanyaan Umum</h2>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-blue-50/50 p-4 rounded-lg shadow-md">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-gray-700">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
