import { ccServices } from "../data";
import Card from "./Card";

const CleaningServices = () => {
  return (
    <div className="container px-6 py-4 mx-auto mt-24">
      <h2 className="text-5xl font-bold text-center text-brand-blue-600">
        CC Cleaning Services
      </h2>
      <p className="mt-3 text-xl text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet feugiat
        interdum nunc.
      </p>
      <div className="flex flex-wrap items-center justify-center md:justify-between mt-7">
        {ccServices.map((s) => (
          <Card service={s} key={s.name+s.img}/>
        ))}
      </div>
    </div>
  );
};
export default CleaningServices;
