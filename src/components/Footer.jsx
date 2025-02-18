import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#4C585B] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Ready to Experience Hassle-Free Banking?</h2>
        <p className="mt-2 text-gray-300">Join FinTrust today and take control of your financial future.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 text-gray-300">
          <div className="flex items-center justify-center">
            <FaMapMarkerAlt className="text-xl mr-3" />
            <span>No 12, FinTrust Road, Guindy, Chennai, Tamil Nadu- 600099, India</span>
          </div>
          <div className="flex items-center justify-center">
            <FaEnvelope className="text-xl mr-3" />
            <span>support@fintrust.com</span>
          </div>
          <div className="flex items-center justify-center">
            <FaPhoneAlt className="text-xl mr-3" />
            <span>+91 9876543210</span>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-6">
          <a className="transition hover:scale-110 active:scale-95 duration-300">
            <FaFacebookF className="text-2xl" />
          </a>
          <a className="transition hover:scale-110 active:scale-95 duration-300">
            <FaTwitter className="text-2xl" />
          </a>
          <a className="transition hover:scale-110 active:scale-95 duration-300">
            <FaInstagram className="text-2xl" />
          </a>
          <a className="transition hover:scale-110 active:scale-95 duration-300">
            <FaLinkedinIn className="text-2xl" />
          </a>
        </div>
        <p className="mt-8 text-gray-400 text-sm">© {new Date().getFullYear()} FinTrust. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
