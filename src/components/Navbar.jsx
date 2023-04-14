import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="w-full flex justify-between">
        <NavLink to={"/"}>Binary Converter</NavLink>
        <NavLink to={"/Learn"}>Learn</NavLink>
      </nav>
    </>
  );
};
