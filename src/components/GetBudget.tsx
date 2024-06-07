import conctactImg from "../assets/images/contact_1.png";

const GetBudget = () => {
  return (
    <div className="container px-6 py-4 mx-auto mt-24">
      <h2 className="text-5xl font-bold text-center text-brand-blue-600">
        Get a Quote is Easy
      </h2>
      <div className="flex flex-row items-center justify-between mt-12">
        <div className="border-4 border-gray-400 border-solid rounded-full">
          <div className="flex items-center justify-center w-24 h-24 md:w-48 md:h-48 p-1 transition border-white border-solid rounded-full cursor-pointer border-[10px] bg-brand-orange-500 ">
            <span className="text-2xl font-bold text-white md:text-7xl">
              01
            </span>
          </div>
        </div>
        <div className="w-full h-2 bg-gray-300"></div>
        <div className="border-4 border-gray-400 border-solid rounded-full">
          <div className="flex items-center justify-center w-24 h-24 md:w-48 md:h-48 p-1 border-[10px] border-white border-solid rounded-full cursor-pointer bg-brand-orange-500 ">
            <span className="text-2xl font-bold text-white md:text-7xl">
              02
            </span>
          </div>
        </div>
        <div className="w-full h-2 bg-gray-300"></div>
        <div className="border-4 border-gray-400 border-solid rounded-full">
          <div className="flex items-center justify-center w-24 h-24 md:w-48 md:h-48 border-[10px] border-white border-solid rounded-full cursor-pointer bg-brand-orange-500">
            <span className="text-2xl font-bold text-white md:text-7xl">
              03
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-8">
        <div className="font-bold md:text-2xl">Submit a few details.</div>
        <div className="font-bold md:text-2xl">
          We will schedule a walk-through.
        </div>
        <div className="font-bold md:text-2xl">Get a quote!</div>
      </div>
      <div className="flex flex-row flex-wrap mt-20">
        <div className="mx-5 md:flex-1 ">
          <h2 className="text-5xl font-bold text-brand-blue-600">
            Impressive & Clean Businesses with CC Commercial Cleaning
          </h2>
          <p className="text-xl mt-7">
            Your office should reflect the professionalism and esteem of your
            company. CCC can deliver the impressive results your customers,
            clients, and employees expect when they walk into your business.
            Based in Birmingham, Alabama, we set the bar when it comes to
            commercial janitorial services that are ideal for office buildings,
            warehouses, plants, and factories. Simply put: nothing is left out,
            and no dirt is kept in!
          </p>
          <div className="flex flex-wrap items-center ">
            <p className="py-4 mr-5 text-xl ">Call us today at:</p>
            <button
              type="button"
              className="px-6 py-4 text-xl text-white rounded-full bg-brand-orange-500 md:mb-0"
            >
              (205) 484-9624
            </button>
          </div>
        </div>
        <div className="md:flex-1 mt-7 md:mt-0 ">
          <img
            src={conctactImg}
            alt="about us"
            className="block object-cover w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};
export default GetBudget;
