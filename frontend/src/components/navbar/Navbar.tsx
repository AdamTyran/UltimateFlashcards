import React from "react";
import Brightness3OutlinedIcon from "@mui/icons-material/Brightness3Outlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NavbarButtons from "../../utils/navbar-buttons";
import { Link } from "react-router-dom";

interface Props {
  darkMode: boolean;
  toggleDarkMode(): void;
}

const Navbar = ({ darkMode, toggleDarkMode }: Props) => {
  return (
    <nav className="flex items-center justify-between h-14 bg-neutral-300 dark:bg-gray-800 shadow">
      <button
        className="ml-2 h-10 w-10 rounded-full bg-gray-600  dark:bg-neutral-300"
        onClick={toggleDarkMode}
      >
        {darkMode ? <LightModeOutlinedIcon /> : <Brightness3OutlinedIcon />}
      </button>
      <div className="flex mx-auto text-center gap-2 z-10">
        {NavbarButtons.map((item) => (
          <div key={item.id}>
            <Link
              to={item.path}
              //className="h-12 rounded-md border-4 text-black dark:text-white uppercase border-neutral-500 p-2 font-bold transition-colors before:bg-neutral-300 before:top-0 before:left-0 before:scale-x-0 before:transition-transform before:duration-300 before:content-[''] hover:bg-neutral-500 before:hover:scale-x-100">
              className="relative border-2 border-neutral-500 bg-transparent py-2.5 px-5 font-medium uppercase text-black dark:text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-neutral-600 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
