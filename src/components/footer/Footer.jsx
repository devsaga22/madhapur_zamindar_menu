import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { restaurantConfig } from "../ZamExport";
import { HiMiniMapPin } from "react-icons/hi2";
import { HiPhone } from "react-icons/hi";
const iconMap = {
  FaInstagram,
  FaFacebookF,
  // Add more icons here as needed
};
const Footer = () => {
  return (
    // bg-gray-800 provides a nice contrast
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Social Media Links */}
        <div className="flex justify-between space-x-8 border-b border-gray-700 pb-6 mb-6">
          <div>
            {/* for adress */}
            <h2 className="text-xl font-semibold mb-4 text-center">
              Find Us At
            </h2>
            <p className="text-center text-gray-400">
              Metro: {restaurantConfig.address.metro}
              <br />
              {restaurantConfig.address.street},{" "}
              {restaurantConfig.address.landmark},<br />
              {restaurantConfig.address.city}
              <a
                href={`tel:${restaurantConfig.phone}`}
                className="flex flex-row items-center gap-2 p-2 text-yellow-700 hover:text-green-600 transition duration-300"
                title="Call Us"
              >
                {/* Icon and Phone Number are now forced side-by-side */}
                <HiPhone className="h-5 w-5 shrink-0" />

                <span className="hidden md:inline-block font-medium text-sm underline decoration-gray-400 underline-offset-4 hover:decoration-green-600">
                  {restaurantConfig.phone}
                </span>
              </a>
              <br />
              <a
                href={restaurantConfig.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-yellow-500 hover:underline"
              >
                <span>Google map Link</span> <HiMiniMapPin />
              </a>
            </p>
          </div>
          <div className=" space-x-6 ">
            {/* for social links */}
            <h2 className="text-xl font-semibold mb-4 text-center">
              Follow Us
            </h2>
            {restaurantConfig.socialLinks.map((link) => {
              const IconComponent = iconMap[link.iconClass];
              if (!IconComponent) return null; // Handle missing icons

              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center  text-gray-400 hover:text-red-500 transition duration-300"
                  aria-label={link.name}
                >
                  <IconComponent className="w-7 h-7" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright and Information */}
        <div className="text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {restaurantConfig.name}. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
