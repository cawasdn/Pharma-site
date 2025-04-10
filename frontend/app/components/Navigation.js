"use client";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <nav className="bg-red-500 h-[70px] flex relative w-full overflow-hidden">
        <ul className="flex space-x-4 items-center pl-3 [&>*]:p-2  [&>*]:bg-white [&>*]:rounded-sm">
          <div>
            <li>ORDER ONLINE</li>
          </div>
          <div>
            <li>ABOUT US</li>
          </div>
        </ul>
        <div className="relative absolute left-13 top-3">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="white"
            size={23}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
