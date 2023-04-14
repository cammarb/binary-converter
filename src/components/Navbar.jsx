import { NavLink } from "react-router-dom";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full p-3 border-b-2 flex justify-between items-center">
        <NavLink to={"/"}>Binary Converter</NavLink>
        <div className="flex gap-4 items-center">
          <NavLink to={"/learn"}>Learn</NavLink>
          <button
            className="p-2 bg-slate-200 rounded-md"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <MdOutlineClose size={20} /> : <MdMenu size={20} />}
          </button>
        </div>
      </nav>
    </>
  );
};
