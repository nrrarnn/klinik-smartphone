import React from 'react';

type TestimonialCardProps = {
  quote: string;
  author: string;
  photo?: string; // Foto pelanggan opsional
};

const TestimonialCard = ({ quote, author, photo }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border hover:border-slate-300 hover:shadow-xl transition-all duration-300" data-aos="zoom-in-left"
      data-aos-duration="1500">
      <div className="flex items-center mb-4">
        {photo && (
          <img
            src={photo}
            alt={author}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        )}
        <div>
          <h3 className="text-lg font-semibold">{author}</h3>
          <p className="text-gray-600 text-sm">Pelanggan</p>
        </div>
      </div>
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
        <p>&ldquo;{quote}&rdquo;</p>
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
