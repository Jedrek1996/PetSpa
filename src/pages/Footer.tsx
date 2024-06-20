import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <footer
      className="mt-auto py-4 bg-yellow-50 flex flex-col items-center"
      style={{ color: "var(--color-pink)" }}
    >
      <div className="flex justify-center gap-4 underline text-xs m-2.5">
        <div className="">About</div>
        <div className="">Grooming</div>
        <div className="">FAQs</div>
        <div className="">Contact</div>
        <div className="">Book</div>
        <div className="">T&Cs</div>
      </div>
      <div className="flex mt-2 gap-4 text-xl">
        <FaInstagram />
        <FaTiktok />
      </div>
      <p className="text-gray-300 text-center font-thin text-xs mt-4">
        © 2024 Kk's Website. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
