import { FaClock, FaPhoneAlt } from "react-icons/fa";


export const Info = () => {
  return (
    <div className="text-white bg-brand-blue-500 h-[50px] hidden md:block ">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex gap-2">
          <div className="flex text-xl ">
            <FaClock />
            <p className="ml-2">Mon-Fri: 9AM - 5PM</p>
          </div>
          <div className="flex flex-1 text-xl">
          <FaPhoneAlt />
            <p className="ml-2">(205) 484-9624</p>
          </div>
        </div>
        <button className="px-6 text-xl font-bold text-white bg-brand-orange-500 h-[50px]">
          Get appointment now
        </button>
      </div>
    </div>
  );
};
