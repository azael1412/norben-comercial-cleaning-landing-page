import { services as data } from "../data";

const Services = () => {
  const services = data;
  return (
    <div className="container px-6 py-4 mx-auto ">
      <div className="flex flex-row flex-wrap items-center justify-center mt-24 md:justify-between">
        {services.map((service) => (
          <div>
            <img
              src={service.img}
              alt={service.name}
              className="block object-cover p-1 transition border-4 border-transparent border-solid rounded-full cursor-pointer hover:border-brand-orange-500"
            />
            <p className="text-xl font-semibold text-center mt-7">
              {service.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
