import aboutusImg from "../assets/images/about-us.png";
const AboutUs = () => {
  return (
    <div className="container px-6 py-4 mx-auto mt-24">
    <div className="flex flex-col-reverse flex-wrap md:flex-row">
      <div className="relative md:flex-1 ">
        <img
          src={aboutusImg}
          alt="about us"
          className="block object-cover w-full h-auto"
        />
        <div className="lg:absolute bottom-0 right-0 p-6 bg-brand-orange-500 lg:w-[382px] lg:h-[268px]">
          <p className="mt-4 text-xl font-bold uppercase text-white max-w-[304px]">
            Professional House Cleaning
          </p>
          <div className="mt-9">
            <div className="w-16 border-t-4 border-white"></div>
            <p className="text-4xl font-semibold text-white">FREE ESTIMATE</p>
          </div>
        </div>
      </div>
      <div className="mx-5 md:flex-1 ">
        <h2 className="text-5xl font-bold text-brand-blue-600">
          Know Something About Our Company
        </h2>
        <p className="text-xl mt-7">
          There's no greater feeling than coming back to work to an empty
          trash can after stuffing your receptacle with the previous day's
          food, paper, and other refuse. Tasks like trash removal and other
          janitorial services add up and leave your business in a radiant
          condition. With more than 30 years of experience, we have ensured
          customer satisfaction by taking to heart every customer's feedback.
          We strive to improve the way cleaning is done in Birmingham,
          Alabama. Make CCC your first choice for commercial cleaning.
        </p>
        <h3 className="text-xl font-bold my-7 text-brand-blue-700">
          Mission Statement
        </h3>
        <p className="text-xl">
          The mission of Classic Commercial Cleaning is to give our clients
          outstanding customer service and quality services while remaining
          affordable.
        </p>
        <button
          type="button"
          className="px-6 py-4 mb-3 text-xl text-white rounded-full mt-7 bg-brand-orange-500 md:mb-0"
        >
          Read More
        </button>
      </div>
    </div>
  </div>
  

  );
};
export default AboutUs;
