import { FaClock, FaPhoneAlt } from "react-icons/fa";
import contactImg from "../assets/images/contact.png";
import { MdGpsFixed } from "react-icons/md";

const Contact = () => {
  return (
    <div className="mt-24">
      <div className="flex flex-row flex-wrap mt-20">
        <div className="relative md:flex-1 mt-7 md:mt-0 ">
          <img
            src={contactImg}
            alt="contact img"
            className="block object-cover w-full h-auto m-[-1px]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-5">
            <div>
              <h2 className="px-6 text-3xl font-bold text-left text-white md:text-3xl lg:text-5xl mb-7 md:px-0">
                Contact
              </h2>
              <p className="px-6 mb-2 text-xl font-semibold text-white md:px-0">
                Thank you for your interest. We look forward to hearing from you
                soon.
              </p>
              <div className="px-6 mb-2 text-white md:p-0 md:text-xl">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-orange-500">
                    <FaClock />
                  </div>
                  <div className="ml-4">
                    <p>Hours Of Operation</p>
                    <p>Mon-Fri: 9AM - 5PM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-orange-500">
                    <FaPhoneAlt />
                  </div>
                  <div className="ml-4">
                    <p>24/7 Emergency Service</p>
                    <p>(205) 484-9624</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-orange-500">
                    <MdGpsFixed />
                  </div>
                  <div className="ml-4">
                    <p>Service Area</p>
                    <p>Birmingham, AL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto my-auto md:flex-1 ">
          <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-5xl shadow-gray-300/50 dark:shadow-black/50">
            <h3 className="text-3xl font-bold text-brand-blue-500">
              What do you want to ask
            </h3>

            <form className="mt-6">
              <div className="flex-1">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="flex-1 mt-6">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="johndoe@example.com"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="w-full mt-6">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Message
                </label>
                <textarea
                  className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Message"
                ></textarea>
              </div>

              <button className="w-full px-6 py-3 mt-6 text-xl font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-full md:w-fit bg-brand-orange-500 hover:bg-brand-orange-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
