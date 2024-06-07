import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="py-20 text-white bg-brand-blue-600 dark:bg-gray-900">
      <div className="container p-6 mx-auto">
        <div className="mt-6 lg:mt-0 ">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <h3 className="text-3xl font-bold text-white uppercase">Links</h3>
              <a
                href="#"
                className="block mt-2 text-xl text-white hover:underline "
              >
                About Us
              </a>
              <a
                href="#"
                className="block mt-2 text-xl text-white hover:underline"
              >
                Categories
              </a>
              <a
                href="#"
                className="block mt-2 text-xl text-white hover:underline"
              >
                Services List
              </a>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white uppercase">
                Account
              </h3>
              <a
                href="#"
                className="block mt-2 text-xl text-white hover:underline"
              >
                Login
              </a>
              <a
                href="#"
                className="block mt-2 text-xl text-white hover:underline"
              >
                Register
              </a>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white uppercase">Legal</h3>
              <a
                href="#"
                className="block mt-2 text-xl text-white hover:underline"
              >
                Terms and conditions
              </a>
              <a
                href="#"
                className="block mt-2 text-xl text-white hover:underline"
              >
                Privacy policy
              </a>
            </div>
            <div>
              <h3 className="mb-4 text-3xl font-bold text-white">
                Social Links
              </h3>
              <div className="flex flex-wrap gap-3 text-2xl">
                <FaFacebook className="transform cursor-pointer hover:scale-125" />
                <FaInstagram className="transform cursor-pointer hover:scale-125" />
                <FaSquareXTwitter className="transform cursor-pointer hover:scale-125" />
                <FaSquareYoutube className="transform cursor-pointer hover:scale-125" />
              </div>
            </div>


          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

        <div>
          <p className="text-xl text-center text-white ">
            © Brand 2020 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
