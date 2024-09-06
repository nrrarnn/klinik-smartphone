import React from 'react';
import { FaRegArrowAltCircleRight } from "react-icons/fa";


type PropsCard = {
  name: string;
  description: string;
  image: string;
};

const Card = (props: PropsCard) => {
  const { name, description, image } = props;

  return (
    <div className="relative w-[300px] h-[300px] rounded-sm overflow-hidden shadow-lg group" data-aos="fade-up"
      data-aos-duration="1500">
      <img
        src={`/img/${image}.jpg`}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      
      <div
        className="absolute inset-0 bg-black bg-opacity-60 text-white flex flex-col justify-center items-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0"
      >
        <p className="text-center px-4">{description}</p>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 text-white bg-slate-700/60 px-2 py-6">
        <div className="font-bold text-lg flex justify-between px-2 items-center">
          <p>{name}</p>
          <FaRegArrowAltCircleRight/>
        </div>
      </div>
    </div>
  );
};

export default Card;
