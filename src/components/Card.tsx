import { FC } from "react";
import { CCService } from "../data/index";
import { MdArrowForward } from "react-icons/md";

export interface CardProps {
  service: CCService;
}
const Card: FC<CardProps> = ({ service }) => {
  return (
    <div className="w-full max-w-[308px] overflow-hidden rounded-sm shadow-lg mt-4 md:mt-0">
      <img className="w-full" src={service.img} alt={service.name} />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{service.name}</div>
        <p className="text-base text-gray-700">{service.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-brand-orange-500"><MdArrowForward size={24} /></button>
      </div>
    </div>
  );
};
export default Card;
