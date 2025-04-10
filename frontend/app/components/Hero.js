import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

const Navigation = () => {
  return (
    <>
      <div className="h-[10px] w-full bg-[#EC1D23]"></div>
      <nav className="h-full bg-slate-300">
        <div className="flex justify-between p-5">
          <Image
            src="/images/logo.png"
            alt="Pharmacy Logo"
            width={200}
            height={100}
          />
          <div className="p-3 bg-red-500 rounded-md">
            <FaLocationDot color="white" size={15} />
          </div>
        </div>
        <div className="hidden">
          <ul>
            <li>Store Locator</li>
          </ul>
          <ul>
            <li>Order Online</li>
          </ul>
          <ul>
            <li>Drug Information</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
